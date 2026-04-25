{
  lib,
  stdenvNoCC,
  callPackage,
  bun,
  nodejs,
  sysctl,
  makeBinaryWrapper,
  models-dev,
  ripgrep,
  installShellFiles,
  versionCheckHook,
  writableTmpDirAsHomeHook,
  node_modules ? callPackage ./node-modules.nix { },
}:
stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "papecode";
  inherit (node_modules) version src;
  inherit node_modules;

  nativeBuildInputs = [
    bun
    nodejs # for patchShebangs node_modules
    installShellFiles
    makeBinaryWrapper
    models-dev
    writableTmpDirAsHomeHook
  ];

  configurePhase = ''
    runHook preConfigure

    cp -R ${finalAttrs.node_modules}/. .
    patchShebangs node_modules
    patchShebangs packages/*/node_modules

    runHook postConfigure
  '';

  env.MODELS_DEV_API_JSON = "${models-dev}/dist/_api.json";
  env.PAPECODE_DISABLE_MODELS_FETCH = true;
  env.PAPECODE_VERSION = finalAttrs.version;
  env.PAPECODE_CHANNEL = "local";

  buildPhase = ''
    runHook preBuild

    cd ./packages/papecode
    bun --bun ./script/build.ts --single --skip-install
    bun --bun ./script/schema.ts schema.json

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    install -Dm755 dist/papecode-*/bin/papecode $out/bin/papecode
    install -Dm644 schema.json $out/share/papecode/schema.json

    wrapProgram $out/bin/papecode \
      --prefix PATH : ${
        lib.makeBinPath (
          [
            ripgrep
          ]
          # bun runs sysctl to detect if dunning on rosetta2
          ++ lib.optional stdenvNoCC.hostPlatform.isDarwin sysctl
        )
      }

    runHook postInstall
  '';

  postInstall = lib.optionalString (stdenvNoCC.buildPlatform.canExecute stdenvNoCC.hostPlatform) ''
    # trick yargs into also generating zsh completions
    installShellCompletion --cmd papecode \
      --bash <($out/bin/papecode completion) \
      --zsh <(SHELL=/bin/zsh $out/bin/papecode completion)
  '';

  nativeInstallCheckInputs = [
    versionCheckHook
    writableTmpDirAsHomeHook
  ];
  doInstallCheck = true;
  versionCheckKeepEnvironment = [ "HOME" "PAPECODE_DISABLE_MODELS_FETCH" ];
  versionCheckProgramArg = "--version";

  passthru = {
    jsonschema = "${placeholder "out"}/share/papecode/schema.json";
  };

  meta = {
    description = "The open source coding agent";
    homepage = "https://papecode.ai/";
    license = lib.licenses.mit;
    mainProgram = "papecode";
    inherit (node_modules.meta) platforms;
  };
})

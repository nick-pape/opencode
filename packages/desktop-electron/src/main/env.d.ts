interface ImportMetaEnv {
  readonly PAPECODE_CHANNEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module "virtual:papecode-server" {
  export namespace Server {
    export const listen: typeof import("../../../papecode/dist/types/src/node").Server.listen
    export type Listener = import("../../../papecode/dist/types/src/node").Server.Listener
  }
  export namespace Config {
    export const get: typeof import("../../../papecode/dist/types/src/node").Config.get
    export type Info = import("../../../papecode/dist/types/src/node").Config.Info
  }
  export namespace Log {
    export const init: typeof import("../../../papecode/dist/types/src/node").Log.init
  }
  export namespace Database {
    export const Path: typeof import("../../../papecode/dist/types/src/node").Database.Path
    export const Client: typeof import("../../../papecode/dist/types/src/node").Database.Client
  }
  export namespace JsonMigration {
    export type Progress = import("../../../papecode/dist/types/src/node").JsonMigration.Progress
    export const run: typeof import("../../../papecode/dist/types/src/node").JsonMigration.run
  }
  export const bootstrap: typeof import("../../../papecode/dist/types/src/node").bootstrap
}

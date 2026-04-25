<p align="center">
  <a href="https://papecode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="PapeCode logo">
    </picture>
  </a>
</p>
<p align="center">Otwartoźródłowy agent kodujący AI.</p>
<p align="center">
  <a href="https://papecode.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/papecode-ai"><img alt="npm" src="https://img.shields.io/npm/v/papecode-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/papecode/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/papecode/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![PapeCode Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://papecode.ai)

---

### Instalacja

```bash
# YOLO
curl -fsSL https://papecode.ai/install | bash

# Menedżery pakietów
npm i -g papecode-ai@latest        # albo bun/pnpm/yarn
scoop install papecode             # Windows
choco install papecode             # Windows
brew install anomalyco/tap/papecode # macOS i Linux (polecane, zawsze aktualne)
brew install papecode              # macOS i Linux (oficjalna formuła brew, rzadziej aktualizowana)
sudo pacman -S papecode            # Arch Linux (Stable)
paru -S papecode-bin               # Arch Linux (Latest from AUR)
mise use -g papecode               # dowolny system
nix run nixpkgs#papecode           # lub github:anomalyco/papecode dla najnowszej gałęzi dev
```

> [!TIP]
> Przed instalacją usuń wersje starsze niż 0.1.x.

### Aplikacja desktopowa (BETA)

PapeCode jest także dostępny jako aplikacja desktopowa. Pobierz ją bezpośrednio ze strony [releases](https://github.com/anomalyco/papecode/releases) lub z [papecode.ai/download](https://papecode.ai/download).

| Platforma             | Pobieranie                            |
| --------------------- | ------------------------------------- |
| macOS (Apple Silicon) | `papecode-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `papecode-desktop-darwin-x64.dmg`     |
| Windows               | `papecode-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm` lub AppImage           |

```bash
# macOS (Homebrew)
brew install --cask papecode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/papecode-desktop
```

#### Katalog instalacji

Skrypt instalacyjny stosuje następujący priorytet wyboru ścieżki instalacji:

1. `$PAPECODE_INSTALL_DIR` - Własny katalog instalacji
2. `$XDG_BIN_DIR` - Ścieżka zgodna ze specyfikacją XDG Base Directory
3. `$HOME/bin` - Standardowy katalog binarny użytkownika (jeśli istnieje lub można go utworzyć)
4. `$HOME/.papecode/bin` - Domyślny fallback

```bash
# Przykłady
PAPECODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://papecode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://papecode.ai/install | bash
```

### Agents

PapeCode zawiera dwóch wbudowanych agentów, między którymi możesz przełączać się klawiszem `Tab`.

- **build** - Domyślny agent z pełnym dostępem do pracy developerskiej
- **plan** - Agent tylko do odczytu do analizy i eksploracji kodu
  - Domyślnie odmawia edycji plików
  - Pyta o zgodę przed uruchomieniem komend bash
  - Idealny do poznawania nieznanych baz kodu lub planowania zmian

Dodatkowo jest subagent **general** do złożonych wyszukiwań i wieloetapowych zadań.
Jest używany wewnętrznie i można go wywołać w wiadomościach przez `@general`.

Dowiedz się więcej o [agents](https://papecode.ai/docs/agents).

### Dokumentacja

Więcej informacji o konfiguracji PapeCode znajdziesz w [**dokumentacji**](https://papecode.ai/docs).

### Współtworzenie

Jeśli chcesz współtworzyć PapeCode, przeczytaj [contributing docs](./CONTRIBUTING.md) przed wysłaniem pull requesta.

### Budowanie na PapeCode

Jeśli pracujesz nad projektem związanym z PapeCode i używasz "papecode" jako części nazwy (na przykład "papecode-dashboard" lub "papecode-mobile"), dodaj proszę notatkę do swojego README, aby wyjaśnić, że projekt nie jest tworzony przez zespół PapeCode i nie jest z nami w żaden sposób powiązany.

### FAQ

#### Czym to się różni od Claude Code?

Jest bardzo podobne do Claude Code pod względem możliwości. Oto kluczowe różnice:

- 100% open source
- Niezależne od dostawcy. Chociaż polecamy modele oferowane przez [PapeCode Zen](https://papecode.ai/zen); PapeCode może być używany z Claude, OpenAI, Google, a nawet z modelami lokalnymi. W miarę jak modele ewoluują, różnice będą się zmniejszać, a ceny spadać, więc ważna jest niezależność od dostawcy.
- Wbudowane wsparcie LSP
- Skupienie na TUI. PapeCode jest budowany przez użytkowników neovim i twórców [terminal.shop](https://terminal.shop); przesuwamy granice tego, co jest możliwe w terminalu.
- Architektura klient/serwer. Pozwala np. uruchomić PapeCode na twoim komputerze, a sterować nim zdalnie z aplikacji mobilnej. To znaczy, że frontend TUI jest tylko jednym z możliwych klientów.

---

**Dołącz do naszej społeczności** [Discord](https://discord.gg/papecode) | [X.com](https://x.com/papecode)

# Building LaserHM from the source code

This page is for programmers. To use LaserHM, see the [user guide](user-guide.md).

## Before you start

- [Node.js](https://nodejs.org/)
- [Rust](https://www.rust-lang.org/tools/install)
- On a Mac: the Xcode Command Line Tools (`xcode-select --install`).

## Procedure

1. Install the dependencies:

   ```sh
   npm install
   ```

2. Run LaserHM in development mode:

   ```sh
   npm run tauri dev
   ```

3. Make the installers:

   ```sh
   npm run tauri build
   ```

   **Result:** The installers are in `src-tauri/target/release/bundle`.

## Releases

When you push a version tag (for example `v0.1.2`), GitHub Actions makes the installers:
`x64-setup.exe` for Windows and one universal `.dmg` for Macs with an Apple or an Intel processor.
It puts them in a draft release. Publish the draft on the Releases page.
The Mac app has only a local (ad-hoc) signature: `"signingIdentity": "-"` in `src-tauri/tauri.conf.json`.
Without an Apple Developer ID signature, macOS asks the user to allow the app one time.
See `.github/workflows/release.yml`.

// The key held for shortcuts and modified clicks: Ctrl on Windows, Cmd (⌘) on macOS, where
// Ctrl+click is a right-click. Code and texts use these instead of `ctrlKey` and "Ctrl".

export const isMac = navigator.userAgent.includes("Mac");

/** The key's name in texts, e.g. `${MOD}+Z`. */
export const MOD = isMac ? "⌘" : "Ctrl";

/** True when the key (Ctrl, or Cmd on macOS) is held. */
export function modKey(event: MouseEvent | KeyboardEvent): boolean {
  return isMac ? event.metaKey : event.ctrlKey;
}

/** The key that stops a job at once. Mac keyboards have no Pause key, so Esc there. */
export const STOP_KEY = isMac ? "Escape" : "Pause";
/** Its name in texts. */
export const STOP_KEY_NAME = isMac ? "Esc" : "Pause";

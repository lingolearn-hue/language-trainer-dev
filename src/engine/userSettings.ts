// Persists the student's choices across sessions/reloads: which trainer
// they picked, which language pair (source/target — "I want to learn" /
// "I already know"), and their computer/phone display style preference.
// localStorage-backed, silently no-ops if unavailable (private browsing,
// storage disabled, etc.) rather than throwing.
import type { LangCode } from "../types";

export interface UserSettings {
  trainerId?: string;
  targetLang?: LangCode; // "I want to learn"
  sourceLang?: LangCode; // "I already know"
  style?: "computer" | "phone";
}

const KEY = "lt:userSettings";

export function loadSettings(): UserSettings {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as UserSettings) : {};
  } catch {
    return {};
  }
}

export function saveSettings(patch: Partial<UserSettings>): void {
  try {
    const current = loadSettings();
    localStorage.setItem(KEY, JSON.stringify({ ...current, ...patch }));
  } catch {
    // ignore — settings just won't persist this session
  }
}

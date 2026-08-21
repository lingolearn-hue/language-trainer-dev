// Tracks the student's per-lesson "finished" choice, made on the lesson
// completion screen (see Session.tsx):
//   - "mastered"     -> hide in the default lesson list forever
//   - "revisitLater" -> hide in the default lesson list for the next 5
//                       completed sessions (any lesson), then reappear
//   - "revisitSoon"  -> never hidden, just records the choice
//
// "5 sessions" is counted globally (across all lessons), not per-lesson —
// a single shared counter incremented once each time any lesson reaches
// its completion screen. localStorage-backed, same silently-no-op
// tolerance as engine/userSettings.ts.

export type LessonMasteryStatus = "mastered" | "revisitLater" | "revisitSoon";

interface StatusRecord {
  status: LessonMasteryStatus;
  hideUntilSessionCount?: number; // only meaningful for "revisitLater"
}

const STATUS_PREFIX = "lt:lessonStatus:";
const SESSION_COUNT_KEY = "lt:globalSessionCount";
const HIDE_FOR_SESSIONS = 5;

export function getGlobalSessionCount(): number {
  try {
    return parseInt(localStorage.getItem(SESSION_COUNT_KEY) ?? "0", 10) || 0;
  } catch {
    return 0;
  }
}

// Call once per lesson completion (not per button click) — represents
// "a session happened", independent of which mastery choice is made
// afterward, so revisitLater's 5-session countdown advances even when the
// student later completes a *different* lesson.
export function incrementGlobalSessionCount(): number {
  const next = getGlobalSessionCount() + 1;
  try {
    localStorage.setItem(SESSION_COUNT_KEY, String(next));
  } catch {
    // ignore — counter just won't persist this session
  }
  return next;
}

export function setLessonStatus(lessonId: string, status: LessonMasteryStatus): void {
  const record: StatusRecord = { status };
  if (status === "revisitLater") {
    record.hideUntilSessionCount = getGlobalSessionCount() + HIDE_FOR_SESSIONS;
  }
  try {
    localStorage.setItem(STATUS_PREFIX + lessonId, JSON.stringify(record));
  } catch {
    // ignore — choice just won't persist this session
  }
}

export function getLessonStatus(lessonId: string): StatusRecord | null {
  try {
    const raw = localStorage.getItem(STATUS_PREFIX + lessonId);
    return raw ? (JSON.parse(raw) as StatusRecord) : null;
  } catch {
    return null;
  }
}

// Whether the lesson should be hidden in the default (non-"show all")
// lesson list right now.
export function isLessonHiddenByDefault(lessonId: string): boolean {
  const rec = getLessonStatus(lessonId);
  if (!rec) return false;
  if (rec.status === "mastered") return true;
  if (rec.status === "revisitLater") {
    return getGlobalSessionCount() < (rec.hideUntilSessionCount ?? 0);
  }
  return false; // revisitSoon
}

import React, { createContext, useContext, useEffect, useReducer } from "react";
import type { LessonPlan, LanguageSettings, SessionCheckpoint, DisplaySettings } from "../types";

interface SessionState {
  lesson: LessonPlan;
  blockIndex: number;
  status: "running" | "paused" | "complete";
  lang: LanguageSettings;
  display: DisplaySettings;
}

type Action =
  | { type: "NEXT_BLOCK" }
  | { type: "PREV_BLOCK" }
  | { type: "PAUSE" }
  | { type: "RESUME" }
  | { type: "RESTORE"; blockIndex: number };

function checkpointKey(lessonId: string) {
  return `lt:checkpoint:${lessonId}`;
}

function saveCheckpoint(state: SessionState) {
  const cp: SessionCheckpoint = {
    lessonId: state.lesson.id,
    blockIndex: state.blockIndex,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(checkpointKey(state.lesson.id), JSON.stringify(cp));
}

export function loadCheckpoint(lessonId: string): SessionCheckpoint | null {
  const raw = localStorage.getItem(checkpointKey(lessonId));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionCheckpoint;
  } catch {
    return null;
  }
}

function reducer(state: SessionState, action: Action): SessionState {
  switch (action.type) {
    case "NEXT_BLOCK": {
      const nextIndex = state.blockIndex + 1;
      const done = nextIndex >= state.lesson.blocks.length;
      const next: SessionState = {
        ...state,
        blockIndex: done ? state.blockIndex : nextIndex,
        status: done ? "complete" : state.status,
      };
      saveCheckpoint(next);
      return next;
    }
    case "PREV_BLOCK": {
      const next = { ...state, blockIndex: Math.max(0, state.blockIndex - 1) };
      saveCheckpoint(next);
      return next;
    }
    case "PAUSE":
      return { ...state, status: "paused" };
    case "RESUME":
      return { ...state, status: "running" };
    case "RESTORE":
      return { ...state, blockIndex: action.blockIndex };
    default:
      return state;
  }
}

interface SessionContextValue {
  state: SessionState;
  dispatch: React.Dispatch<Action>;
}

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({
  lesson,
  lang,
  display,
  children,
}: {
  lesson: LessonPlan;
  lang: LanguageSettings;
  display: DisplaySettings;
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, {
    lesson,
    blockIndex: 0,
    status: "running",
    lang,
    display,
  });

  // Restore checkpoint on mount if present
  useEffect(() => {
    const cp = loadCheckpoint(lesson.id);
    if (cp && cp.blockIndex > 0 && cp.blockIndex < lesson.blocks.length) {
      dispatch({ type: "RESTORE", blockIndex: cp.blockIndex });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
}

import { useEffect, useState } from "react";
import { getShowAlternateScript, subscribeScriptMode } from "../engine/scriptMode";

// Subscribes to the kanji/kana (ja) and Hanzi/Pinyin (zh) display toggle
// — see engine/scriptMode.ts. Used by every block component that renders
// translated text, so the toggle takes effect live without needing a
// full remount.
export function useShowAlternateScript(): boolean {
  const [show, setShow] = useState(getShowAlternateScript());
  useEffect(() => subscribeScriptMode(setShow), []);
  return show;
}

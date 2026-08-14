import { useState } from "react";

// Explains, per-platform, how to install/enable offline TTS voices for
// the Web Speech API (speechSynthesis) — without this, some languages
// may sound robotic or fall back silently to a different voice/accent
// on a device that hasn't downloaded the right voice pack. Shown from a
// small "?" button on the front page (TrainerSelect), not tied to any
// particular trainer/language — general platform guidance.
export function VoiceHelpOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="voice-help-trigger" onClick={() => setOpen(true)} title="How to install more voices">
        ⓘ Voice setup help
      </button>

      {open && (
        <div className="voice-help-overlay" onClick={() => setOpen(false)}>
          <div className="voice-help-panel" onClick={(e) => e.stopPropagation()}>
            <button className="voice-help-close" onClick={() => setOpen(false)} title="Close">
              ✕
            </button>
            <h3>Getting the best voices</h3>
            <p className="voice-help-intro">
              This app uses your device's built-in text-to-speech. Some languages sound much
              better once you've downloaded their voice pack — here's how, per platform.
            </p>

            <h4>📱 iOS (iPhone / iPad)</h4>
            <ol>
              <li>Open <strong>Settings → Accessibility → Spoken Content → Voices</strong></li>
              <li>Pick the language you need (e.g. German, Chinese, Japanese)</li>
              <li>Tap a voice and choose <strong>Download</strong> — pick the highest-quality
                option available (often labeled "Enhanced" or "Premium")</li>
              <li>Restart Safari / this app afterward so it picks up the new voice</li>
            </ol>

            <h4>🤖 Android</h4>
            <ol>
              <li>Open <strong>Settings → System → Languages & input → Text-to-speech output</strong></li>
              <li>Tap the gear icon next to your TTS engine (usually "Google")</li>
              <li>Go to <strong>Install voice data</strong> and download the languages you need</li>
              <li>Back in the TTS settings, make sure the engine is set to "Google" (Samsung and
                other OEM engines sometimes support fewer languages)</li>
            </ol>

            <h4>💻 Windows / Mac / Chrome</h4>
            <ol>
              <li><strong>Windows:</strong> Settings → Time & Language → Speech → "Manage voices" →
                Add voices for the languages you need</li>
              <li><strong>macOS:</strong> System Settings → Accessibility → Spoken Content →
                System Voice → Manage Voices — download the languages you need</li>
              <li><strong>Chrome/Chromebook:</strong> voices come from the OS above; Chrome itself
                has no separate voice download, but a Google account signed into Chrome can add
                network-based voices automatically</li>
            </ol>

            <p className="voice-help-note">
              No voice installed for a language yet? The app will still work — it just falls back
              to your device's default voice, which may sound accented or robotic for that language.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

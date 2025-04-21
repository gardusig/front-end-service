import { useState } from "react";
import fallbackImage from "../assets/default-persona.jpg";
import { MediaType } from "../types/media";
import { Persona } from "../types/persona";

export default function PersonaPreview(persona: Persona) {
  const [errored, setErrored] = useState(false);

  const src = errored ? fallbackImage : persona.media.url;
  const commonClasses =
    "mx-auto max-w-full max-h-96 rounded-3xl border border-gray-300 shadow object-contain";

  return (
    <div className="text-center space-y-2">
      <label className="block text-sm font-medium">Current character</label>

      <img
        src={src}
        alt={persona.name}
        className={`${commonClasses}`
          + `${persona.media.type === MediaType.GIF ? "animate-none" : ""}`}
        onError={() => setErrored(true)}
      />

      <p className="text-base font-semibold">{persona.name}</p>
    </div>
  );
}

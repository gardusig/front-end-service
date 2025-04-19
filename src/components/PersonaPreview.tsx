import { useState } from "react";
import fallbackImage from "../assets/default-persona.jpg";
import { usePersona } from "../hooks/persona/usePersona";

function isGif(url: string): boolean {
  return url.toLowerCase().endsWith(".gif");
}

export default function PersonaPreview() {
  const { persona, loading } = usePersona();
  const [errored, setErrored] = useState(false);

  if (loading) {
    return <p className="text-center">Loading persona...</p>;
  }

  const src = errored ? fallbackImage : persona.image;
  const commonClasses =
    "mx-auto max-w-full max-h-96 rounded-3xl border border-gray-300 shadow object-contain";

  return (
    <div className="text-center space-y-2">
      <label className="block text-sm font-medium text-gray-700">Current character</label>

      <img
        src={src}
        alt={persona.name}
        className={`${commonClasses} ${isGif(src) ? "animate-none" : ""}`}
        onError={() => setErrored(true)}
      />

      <p className="text-base font-semibold">{persona.name}</p>
    </div>
  );
}

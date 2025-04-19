import { useEffect, useState } from "react";
import fallbackImage from "../assets/default-persona.jpg";
import { usePersona } from "../hooks/persona/usePersona";

export default function PersonaPreview() {
  const { persona, loading } = usePersona();

  const [imgSrc, setImgSrc] = useState(persona.image);

  useEffect(() => {
    setImgSrc(persona.image);
  }, [persona.image]);

  if (loading) {
    return <p className="text-center">Loading persona...</p>;
  }

  return (
    <div className="text-center space-y-2">
      <label className="block text-sm font-medium text-gray-700">Current character</label>
      <img
        src={imgSrc}
        alt={persona.name}
        className="mx-auto w-32 h-32 object-cover rounded-full border border-gray-300 shadow"
        onError={() => setImgSrc(fallbackImage)}
      />
      <p className="text-base font-semibold">{persona.name}</p>
    </div>
  );
}

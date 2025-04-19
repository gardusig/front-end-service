import { usePersonaContext } from "../hooks/persona/context/usePersonaContext";

export default function PersonaPreview() {
  const { persona } = usePersonaContext();
  return (
    <div className="text-center space-y-2">
      <label className="block text-sm font-medium text-gray-700">Current character</label>
      <img
        src={persona.image}
        alt={persona.name}
        className="mx-auto w-32 h-32 object-cover rounded-full border border-gray-300 shadow"
      />
      <p className="text-base font-semibold">{persona.name}</p>
    </div>
  );
}

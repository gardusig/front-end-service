import { Link } from "react-router-dom";
import { useCustomPersonaContext } from "../hooks/custom-persona/useCustomPersonaContext";

export default function PersonaCard({
    persona,
    onDelete,
}: {
    persona: ReturnType<typeof useCustomPersonaContext>["customPersonas"][number];
    onDelete: () => void;
}) {
    return (
        <Link
            to={`/personas/${persona.id}`}
            className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
            <img
                src={persona.persona.media.url}
                alt={persona.persona.name}
                className="w-16 h-16 rounded-lg object-cover border border-white"
                loading="lazy"
            />
            <div className="flex-grow">
                <p className="font-semibold text-lg">{persona.persona.name}</p>
                <p className="text-sm text-gray-300 capitalize">{persona.label}</p>
            </div>
            <button
                type="button"
                aria-label={`Delete persona ${persona.persona.name}`}
                onClick={(e) => {
                    e.preventDefault();
                    onDelete();
                }}
                className="ml-4 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
                Delete
            </button>
        </Link>
    );
}

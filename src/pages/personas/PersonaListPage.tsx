import { useNavigate } from "react-router-dom";
import { useCustomPersonaContext } from "../../hooks/custom-persona/useCustomPersonaContext";
import { CustomPersona } from "../../types/customPersona";
import { PersonaLabel } from "../../types/personaLabel";
import { DEFAULT_PERSONA } from "../../hooks/persona/personaUtils";

export default function PersonaListPage() {
    const {
        customPersonas,
        loading,
        createOrUpdateCustomPersona,
        removeCustomPersona,
    } = useCustomPersonaContext();

    const navigate = useNavigate();
    const personaList = Object.values(customPersonas);

    const handleAddPersona = () => {
        const newPersona: CustomPersona = {
            id: `labeled-persona-${crypto.randomUUID()}`,
            label: PersonaLabel.RANDOM,
            persona: DEFAULT_PERSONA,
        };
        createOrUpdateCustomPersona(newPersona);
        navigate(`/personas/${newPersona.id}`);
    };

    if (loading) {
        return (
            <main className="min-h-screen p-6 bg-gray-900 text-white">
                <p className="text-center text-gray-300">Loading personas...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen p-6 bg-gray-900 text-white">
            <section className="max-w-4xl mx-auto space-y-6">
                <header className="text-center">
                    <h1 className="text-3xl font-bold">🎭 Your Personas</h1>
                    <p className="text-gray-300 mt-2">Create and manage your custom personas.</p>
                </header>

                <div className="text-right">
                    <button
                        onClick={handleAddPersona}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                        ➕ <span>Add Persona</span>
                    </button>
                </div>

                {personaList.length === 0 ? (
                    <p className="text-center text-gray-400 italic">You haven’t added any personas yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {personaList.map((persona) => (
                            <li
                                key={persona.id}
                                className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-lg shadow"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">{persona.persona.name}</h2>
                                    <p className="text-sm text-gray-300">{persona.label}</p>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate(`/personas/${persona.id}`)}
                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-sm rounded"
                                    >
                                        View
                                    </button>

                                    <button
                                        onClick={() => removeCustomPersona(persona.id)}
                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-sm rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}

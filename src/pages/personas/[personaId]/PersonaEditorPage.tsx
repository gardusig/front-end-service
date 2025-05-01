import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PersonaLabel } from "../../../types/personaLabel";
import { useCustomPersonaContext } from "../../../hooks/custom-persona/useCustomPersonaContext";
import { CustomPersona } from "../../../types/customPersona";

export default function PersonaEditorPage() {
    const { personaId } = useParams();
    const navigate = useNavigate();
    const { getCustomPersona, createOrUpdateCustomPersona } = useCustomPersonaContext();

    const [persona, setPersona] = useState<CustomPersona | null>(null);

    const setLabel = (label: PersonaLabel) => {
        if (!persona) return;
        setPersona(prev => prev ? { ...prev, label } : prev);
    };

    useEffect(() => {
        if (!personaId) {
            navigate("/not-found");
            return;
        }

        try {
            const foundPersona = getCustomPersona(personaId);
            if (!foundPersona) {
                navigate("/not-found");
                return;
            }
            setPersona(foundPersona);
        } catch (err) {
            console.warn("Failed to fetch persona", err);
            navigate("/not-found");
        }
    }, [personaId, getCustomPersona, navigate]);

    const handleSave = () => {
        if (!persona) return;
        createOrUpdateCustomPersona(persona);
        navigate("/personas");
    };

    if (!persona) {
        return (
            <main className="min-h-screen p-6 bg-gray-900 text-white">
                <p className="text-center text-gray-300">Loading...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen p-6 bg-gray-900 text-white">
            <section className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-center">Edit Persona</h1>


                <div className="flex justify-center">
                    {persona.persona.media.type === "image" || persona.persona.media.type === "gif" ? (
                        <img
                            src={persona.persona.media.url}
                            alt={persona.persona.name}
                            className="w-48 h-48 object-cover rounded shadow"
                        />
                    ) : persona.persona.media.type === "video" ? (
                        <video
                            controls
                            src={persona.persona.media.url}
                            className="w-48 h-48 rounded shadow"
                        />
                    ) : (
                        <p className="text-sm text-gray-400 italic">No media available</p>
                    )}
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            type="text"
                            disabled
                            value={persona.persona.name}
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Label</label>
                        <select
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                            value={persona.label}
                            onChange={(e) => setLabel(e.target.value as PersonaLabel)}
                        >
                            {Object.values(PersonaLabel).map((labelOption) => (
                                <option key={labelOption} value={labelOption}>
                                    {labelOption}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button
                        className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
                        onClick={() => navigate("/personas")}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>

            </section>
        </main>
    );
}

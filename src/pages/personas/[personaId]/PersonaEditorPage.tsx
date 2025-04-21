import { JSX, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePersona } from "../../../hooks/persona/usePersona";
import { useContext } from "react";
import { CustomPersonaContext } from "../../../hooks/custom-persona/CustomPersonaContext";
import { PersonaLabel } from "../../../types/personaLabel";
import PersonaPreview from "../../../components/PersonaPreview";
import PersonaSelect from "../../../components/PersonaSelect";
import { DEFAULT_CUSTOM_PERSONA } from "../../../hooks/custom-persona/customPersonaUtils";

export default function PersonaEditorPage(): JSX.Element {
    const { personaId } = useParams();
    const navigate = useNavigate();

    const {
        customPersonas,
        loading,
        saveCustomPersona,
        removeCustomPersona,
    } = useContext(CustomPersonaContext);

    const { persona, setPersonaId, loading: loadingPersona } = usePersona(personaId);

    const customPersona = customPersonas.find((p) => p.id === personaId) ?? {
        ...DEFAULT_CUSTOM_PERSONA,
        id: personaId!,
        persona,
    };

    const [label, setLabel] = useState<PersonaLabel>(customPersona.label);

    useEffect(() => {
        setLabel(customPersona.label);
    }, [customPersona]);

    const handleSave = () => {
        if (!personaId) return;
        saveCustomPersona({ id: personaId, persona, label });
        navigate("/personas");
    };

    const handleDelete = () => {
        if (!personaId) return;
        removeCustomPersona(personaId);
        navigate("/personas");
    };

    const isLoading = loading || loadingPersona;

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 text-white space-y-6">
                <h2 className="text-xl font-semibold text-center">Edit Custom Persona</h2>

                {isLoading ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    <>
                        <PersonaSelect
                            value={persona.id}
                            onChange={setPersonaId}
                            loading={loadingPersona}
                        />

                        <div className="space-y-1">
                            <label htmlFor="label-select" className="text-sm font-medium">
                                Assign Label
                            </label>

                            <select
                                id="label-select"
                                value={label}
                                onChange={(e) => setLabel(e.target.value as PersonaLabel)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black shadow-sm"
                            >
                                {Object.values(PersonaLabel).map((lbl) => (
                                    <option key={lbl} value={lbl}>
                                        {lbl}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-2">
                            <button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                                onClick={handleSave}
                            >
                                Save Persona
                            </button>

                            {customPersonas.some((p) => p.id === personaId) && (
                                <button
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            )}
                        </div>

                        <hr className="border-white/30" />
                        <PersonaPreview {...persona} />
                    </>
                )}
            </div>
        </div>
    );
}

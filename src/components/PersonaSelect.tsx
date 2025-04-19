import { SelectField } from "@aws-amplify/ui-react";
import { PERSONAS } from "../data/personas";
import { usePersona } from "../hooks/persona/usePersona";

export default function PersonaSelect() {
    const { persona, setPersonaId, loading } = usePersona();

    const isKnownId = PERSONAS.some((p) => p.id === persona.id);
    const currentValue = isKnownId ? persona.id : "";

    return (
        <SelectField
            label="Choose Persona"
            value={currentValue}
            onChange={(e) => setPersonaId(e.target.value)}
            isDisabled={loading}
        >
            <option value="" disabled>
                -- Select a persona --
            </option>

            {PERSONAS.map((p) => (
                <option key={p.id} value={p.id}>
                    {p.name}
                </option>
            ))}
        </SelectField>
    );
}

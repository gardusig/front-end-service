import { SelectField } from "@aws-amplify/ui-react";
import { PERSONAS } from "../data/personas";
import { usePersona } from "../hooks/persona/usePersona";

export default function PersonaSelect() {
    const { persona, setPersonaId, loading } = usePersona();
    if (loading) {
        return <p className="text-center">Loading persona...</p>;
    }

    return (
        <SelectField
            label="Choose Persona"
            value={persona.id}
            onChange={(e) => setPersonaId(e.target.value)}
            isDisabled={loading}
        >
            {PERSONAS.map((p) => (
                <option key={p.id} value={p.id}>
                    {p.name}
                </option>
            ))}
        </SelectField>
    );
}

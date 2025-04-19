import { SelectField } from "@aws-amplify/ui-react";
import { PERSONAS } from "../data/personas";
import { usePersonaContext } from "../hooks/persona/context/usePersonaContext";

export default function PersonaSelect() {
    const { persona, updatePersona } = usePersonaContext();
    return (
        <SelectField
            label="Choose Persona"
            value={persona.id}
            onChange={(e) => updatePersona(e.target.value)}
        >
            {PERSONAS.map((p) => (
                <option key={p.id} value={p.id}>
                    {p.name}
                </option>
            ))}
        </SelectField>
    );
}

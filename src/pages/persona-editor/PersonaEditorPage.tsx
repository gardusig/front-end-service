import PersonaSelect from "../../components/PersonaSelect";
import PersonaPreview from "../../components/PersonaPreview";
import { usePersonaContext } from "../../hooks/persona/context/usePersonaContext";

export default function PersonaEditorPage() {
    const { persona } = usePersonaContext();

    return (
        <div className="p-4 max-w-md mx-auto space-y-4">
            <PersonaSelect />
            <PersonaPreview />
        </div>
    );
}

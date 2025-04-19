import PersonaSelect from "../../components/PersonaSelect";
import PersonaPreview from "../../components/PersonaPreview";

export default function PersonaEditorPage() {
    return (
        <div className="p-4 max-w-md mx-auto space-y-4">
            <PersonaSelect />
            <PersonaPreview />
        </div>
    );
}

import { useNavigate } from "react-router-dom";
import { CustomPersona } from "../types/customPersona";

type CustomPersonaCardProps = {
    customPersona: CustomPersona;
    onRemove: () => void;
    onEdit?: () => void;
};

export function CustomPersonaCard({
    customPersona,
    onRemove,
    onEdit,
}: CustomPersonaCardProps) {
    const navigate = useNavigate();

    const handleEdit = () => {
        if (onEdit) {
            onEdit();
        } else {
            navigate(`/personas/${customPersona.id}`);
        }
    };

    return (
        <div className="flex items-center justify-between bg-white/10 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-4">
                <img
                    src={customPersona.persona.media.url}
                    alt={customPersona.persona.name}
                    className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                    <p className="font-semibold text-white">{customPersona.persona.name}</p>
                    <p className="text-sm text-gray-400">{customPersona.label}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-white text-sm"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-white text-sm"
                    onClick={onRemove}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

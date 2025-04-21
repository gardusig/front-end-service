import { useNavigate } from "react-router-dom";

type BackButtonProps = {
    to: string;
    label?: string;
};

export default function BackButton({ to, label = "Back" }: BackButtonProps) {
    const navigate = useNavigate();

    return (
        <button
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white transition-colors"
            onClick={() => navigate(to)}
        >
            {label}
        </button>
    );
}

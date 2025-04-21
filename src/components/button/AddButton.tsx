type AddButtonProps = {
    onClick: () => void;
    label?: string;
};

export default function AddButton({ onClick, label = "Add" }: AddButtonProps) {
    return (
        <button
            type="button"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition-colors"
            onClick={onClick}
        >
            {label}
        </button>
    );
}

import { AVAILABLE_PERSONAS } from "../db/personaDb";

type PersonaSelectProps = {
    value: string;
    onChange: (id: string) => void;
    loading?: boolean;
};

export default function PersonaSelect({ value, onChange, loading = false }: PersonaSelectProps) {
    return (
        <div className="space-y-1">
            <label htmlFor="persona-select" className="text-sm font-medium">
                Choose Persona
            </label>

            <select
                id="persona-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={loading}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
            >
                <option value="" disabled>
                    -- Select a persona --
                </option>

                {AVAILABLE_PERSONAS.map((p) => (
                    <option key={p.id} value={p.id}>
                        {p.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

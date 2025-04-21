import { useNavigate } from "react-router-dom";
import ListCustomPersona from "../../components/ListCustomPersona";
import { JSX } from "react";

export default function PersonaListPage(): JSX.Element {
    const navigate = useNavigate();

    const handleAdd = () => {
        const newId = `labeled-persona-${crypto.randomUUID()}`;
        navigate(`/personas/${newId}`);
    };

    return (
        <main className="min-h-screen p-6 bg-gray-900 text-white">
            <section className="max-w-4xl mx-auto space-y-6">
                <header className="text-center">
                    <h1 className="text-3xl font-bold">🎭 Your Personas</h1>
                    <p className="text-gray-300 mt-2">Manage and edit your custom personas below.</p>
                </header>

                <div className="text-right">
                    <button
                        onClick={handleAdd}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                        ➕ <span>Add Persona</span>
                    </button>
                </div>

                <ListCustomPersona />
            </section>
        </main>
    );
}

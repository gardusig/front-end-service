import { useParams } from "react-router-dom";
import { useCustomPersona } from "../../../hooks/custom-persona/useCustomPersona";
import { usePersonaDeck } from "../../../hooks/persona-deck/usePersonaDeck";

export default function DeckEditorPage() {
    const { deckId } = useParams();
    const { personaDeck, loading, addPersonaToDeck, removePersonaFromDeck } = usePersonaDeck(deckId);
    const { customPersonas, loadingList } = useCustomPersona();

    const deckPersonas = personaDeck.customPersonaList;
    const deckPersonaIds = new Set(deckPersonas.map((p) => p.id));
    const availableToAdd = customPersonas.filter((p) => !deckPersonaIds.has(p.id));

    const handleAdd = (id: string) => {
        const persona = customPersonas.find((p) => p.id === id);
        if (persona) {
            addPersonaToDeck(persona);
        }
    };

    return (
        <main className="min-h-screen p-6 bg-gray-900 text-white">
            <section className="max-w-4xl mx-auto space-y-6">
                <header className="text-center">
                    <h1 className="text-3xl font-bold">🗂️ Edit Deck: {deckId}</h1>
                    <p className="text-gray-300 mt-2">Manage the personas inside this deck.</p>
                </header>

                {(loading || loadingList) ? (
                    <p className="text-center text-gray-300">Loading deck...</p>
                ) : (
                    <>
                        <div className="space-y-2">
                            <label htmlFor="add-persona" className="block text-sm font-medium">
                                Add Persona to Deck
                            </label>
                            <select
                                id="add-persona"
                                onChange={(e) => handleAdd(e.target.value)}
                                className="w-full px-3 py-2 rounded text-black"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    -- Select a custom persona --
                                </option>
                                {availableToAdd.map((p) => (
                                    <option key={p.id} value={p.id}>
                                        {p.id} — {p.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <ul className="space-y-4 mt-6">
                            {deckPersonas.map((persona) => (
                                <li
                                    key={persona.id}
                                    className="flex justify-between items-center p-4 bg-white/10 rounded-lg"
                                >
                                    <div>
                                        <h2 className="text-lg font-semibold">{persona.id}</h2>
                                        <p className="text-sm text-gray-300">{persona.label}</p>
                                    </div>
                                    <button
                                        onClick={() => removePersonaFromDeck(persona.id)}
                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </section>
        </main>
    );
}

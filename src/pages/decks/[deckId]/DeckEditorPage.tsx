import { useNavigate, useParams } from "react-router-dom";
import { usePersonaDeckContext } from "../../../hooks/persona-deck/usePersonaDeckContext";
import { useCustomPersonaContext } from "../../../hooks/custom-persona/useCustomPersonaContext";
import { useMemo } from "react";
import { CustomPersona } from "../../../types/customPersona";
import { DEFAULT_CUSTOM_PERSONA } from "../../../hooks/custom-persona/customPersonaUtils";
import { CustomPersonaCard } from "../../../components/CustomPersonaCard";
import BackButton from "../../../components/button/BackButton";
import AddButton from "../../../components/button/AddButton";

export default function DeckEditorPage() {
    const navigate = useNavigate();
    const { deckId } = useParams<{ deckId: string }>();

    const {
        getPersonaDeck,
        createOrUpdatePersonaDeck,
        loading: loadingDeck,
    } = usePersonaDeckContext();

    const { createOrUpdateCustomPersona } = useCustomPersonaContext();

    const deck = useMemo(() => {
        return deckId ? getPersonaDeck(deckId) : undefined;
    }, [deckId, getPersonaDeck]);

    if (!deckId || (!loadingDeck && !deck)) {
        navigate("/not-found");
        return null;
    }

    const handleAddPersona = () => {
        if (!deck) return;

        const newPersona: CustomPersona = {
            ...DEFAULT_CUSTOM_PERSONA,
            id: `custom-persona-${crypto.randomUUID()}`,
        };

        createOrUpdateCustomPersona(newPersona);

        const updatedDeck = {
            ...deck,
            customPersonaList: [...deck.customPersonaList, newPersona],
        };

        createOrUpdatePersonaDeck(updatedDeck);
    };

    const handleRemovePersona = (personaId: string) => {
        if (!deck) return;

        const updatedDeck = {
            ...deck,
            customPersonaList: deck.customPersonaList.filter((p) => p.id !== personaId),
        };

        createOrUpdatePersonaDeck(updatedDeck);
    };

    if (loadingDeck) {
        return (
            <main className="min-h-screen p-6 bg-gray-900 text-white">
                <p className="text-center text-gray-300">Loading deck...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen p-6 bg-gray-900 text-white">
            <section className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-center">Edit Deck</h1>

                <div className="space-y-4">
                    {deck?.customPersonaList.map((customPersona) => (
                        <CustomPersonaCard
                            key={customPersona.id}
                            customPersona={customPersona}
                            onRemove={() => handleRemovePersona(customPersona.id)}
                        />
                    ))}
                </div>

                <div className="flex justify-between">
                    <BackButton to={"/decks"} />
                    <AddButton onClick={handleAddPersona} label="Add Persona" />
                </div>
            </section>
        </main>
    );
}

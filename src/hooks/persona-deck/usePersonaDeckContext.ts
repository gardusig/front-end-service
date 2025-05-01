import { useEffect, useState } from "react";
import {
  listPersonaDecks,
  createPersonaDeck,
  updatePersonaDeck,
  deletePersonaDeck,
} from "../../services/personaDeckService";
import { PersonaDeck } from "../../types/personaDeck";
import { PersonaDeckContextType } from "./PersonaDeckContext";
import { getRecordFromList } from "../hookUtil";

export const usePersonaDeckContext = (): PersonaDeckContextType => {
  const [decks, setDecks] = useState<Record<string, PersonaDeck>>({});
  const [loading, setLoading] = useState(true);

  const fetchAllPersonaDecks = () => {
    setLoading(true);
    listPersonaDecks()
      .then((deckList) => {
        const deckRecord = getRecordFromList(deckList);
        setDecks(deckRecord);
      })
      .catch((err) => {
        console.warn("Failed to list persona decks:", err);
      })
      .finally(() => setLoading(false));
  };

  const createOrUpdatePersonaDeck = (deck: PersonaDeck) => {
    setLoading(true);
    const saveOp = decks[deck.id]
      ? updatePersonaDeck(deck.id, deck)
      : createPersonaDeck(deck);

    saveOp
      .then(fetchAllPersonaDecks)
      .catch((err) => {
        console.error("Failed to save persona deck:", err);
      })
      .finally(() => setLoading(false));
  };

  const removePersonaDeck = (deckId: string) => {
    setLoading(true);
    deletePersonaDeck(deckId)
      .then(fetchAllPersonaDecks)
      .catch((err) => {
        console.error("Failed to delete persona deck:", err);
        setLoading(false);
      });
  };

  const getPersonaDeck = (id: string): PersonaDeck => {
    return decks[id];
  };

  useEffect(() => {
    fetchAllPersonaDecks();
  }, []);

  return {
    decks,
    loading,
    getPersonaDeck,
    createOrUpdatePersonaDeck,
    removePersonaDeck,
    fetchAllPersonaDecks,
  };
};

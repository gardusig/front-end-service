import { createContext } from "react";
import { PersonaDeck } from "../../types/personaDeck";
import { DEFAULT_PERSONA_DECK } from "./personaDeckUtils";

export type PersonaDeckContextType = {
  decks: Record<string, PersonaDeck>;
  loading: boolean;
  getPersonaDeck: (deckId: string) => PersonaDeck;
  createOrUpdatePersonaDeck: (deck: PersonaDeck) => void;
  removePersonaDeck: (deckId: string) => void;
  fetchAllPersonaDecks: () => void;
};

export const PersonaDeckListContext = createContext<PersonaDeckContextType>({
  decks: {},
  loading: true,
  getPersonaDeck: () => DEFAULT_PERSONA_DECK,
  createOrUpdatePersonaDeck: () => { },
  removePersonaDeck: () => { },
  fetchAllPersonaDecks: () => { },
});

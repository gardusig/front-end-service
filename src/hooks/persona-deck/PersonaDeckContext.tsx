import { createContext } from "react";
import { PersonaDeck } from "../../types/personaDeck";

export type PersonaDeckContextType = {
  decks: Record<string, PersonaDeck>;
  loading: boolean;
  getPersonaDeck: (deckId: string) => PersonaDeck | undefined;
  createOrUpdatePersonaDeck: (deck: PersonaDeck) => void;
  removePersonaDeck: (deckId: string) => void;
  fetchAllPersonaDecks: () => void;
};

export const PersonaDeckContext = createContext<PersonaDeckContextType>({
  decks: {},
  loading: true,
  getPersonaDeck: () => undefined,
  createOrUpdatePersonaDeck: () => { },
  removePersonaDeck: () => { },
  fetchAllPersonaDecks: () => { },
});

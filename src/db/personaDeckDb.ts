import { PersonaDeck } from "../types/personaDeck";
import { CUSTOM_PERSONA_BUGS, CUSTOM_PERSONA_EISTEIN } from "./customPersonaDb";

export const DEFAULT_PERSONA_DECK: PersonaDeck = {
  id: "deck-default",
  customPersonaList: [CUSTOM_PERSONA_BUGS, CUSTOM_PERSONA_EISTEIN],
};

export const EMPTY_PERSONA_DECK: PersonaDeck = {
  id: "deck-empty",
  customPersonaList: [],
};

export const personaDeckDb: Map<string, PersonaDeck> = new Map(
  [DEFAULT_PERSONA_DECK, EMPTY_PERSONA_DECK].map((deck) => [deck.id, deck])
);

import { PersonaDeck } from "../../types/personaDeck";
import { DEFAULT_CUSTOM_PERSONAS } from "../custom-persona/customPersonaUtils";

const DEFAULT_PERSONA_DECK_ID = "DEFAULT_PERSONA_DECK_ID";

export const DEFAULT_PERSONA_DECK: PersonaDeck = {
  id: DEFAULT_PERSONA_DECK_ID,
  customPersonaList: DEFAULT_CUSTOM_PERSONAS,
};

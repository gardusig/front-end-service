import { CustomPersona } from "../../types/customPersona";
import { PersonaLabel } from "../../types/personaLabel";
import { DEFAULT_PERSONA } from "../persona/personaUtils";

const DEFAULT_CUSTOM_PERSONA_ID = "DEFAULT_CUSTOM_PERSONA_ID";

export const DEFAULT_CUSTOM_PERSONA: CustomPersona = {
  id: DEFAULT_CUSTOM_PERSONA_ID,
  persona: DEFAULT_PERSONA,
  label: PersonaLabel.RANDOM,
};

export const DEFAULT_CUSTOM_PERSONAS: CustomPersona[] = [
  DEFAULT_CUSTOM_PERSONA,
];

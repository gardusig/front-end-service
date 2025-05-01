import { CustomPersona } from "../types/customPersona";
import { PersonaLabel } from "../types/personaLabel";
import { BUGS_BUNNY, EINSTEIN } from "./personaDb";

export const CUSTOM_PERSONA_BUGS: CustomPersona = {
  id: "custom-bugs",
  persona: BUGS_BUNNY,
  label: PersonaLabel.COMEDY,
};

export const CUSTOM_PERSONA_EISTEIN: CustomPersona = {
  id: "custom-eistein",
  persona: EINSTEIN,
  label: PersonaLabel.TECH,
};

export const customPersonaDb: Map<string, CustomPersona> = new Map(
  [CUSTOM_PERSONA_BUGS, CUSTOM_PERSONA_EISTEIN].map((p) => [p.id, p])
);

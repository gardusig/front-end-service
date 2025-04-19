import { Persona } from "../../types/Persona";

export const DEFAULT_PERSONA_ID = "default";

export const DEFAULT_PERSONA: Persona = {
  id: DEFAULT_PERSONA_ID,
  name: "Anyone",
  image: "/src/assets/default-persona.jpg",
};

export const validatePersona = (persona: Persona): boolean => {
  return typeof persona.id === "string" && typeof persona.name === "string";
};

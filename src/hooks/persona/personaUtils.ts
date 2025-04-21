import { MediaType } from "../../types/media";
import { Persona } from "../../types/persona";

const DEFAULT_PERSONA_ID = "default";

export const DEFAULT_PERSONA: Persona = {
  id: DEFAULT_PERSONA_ID,
  name: "Anyone",
  media: {
    url: "/src/assets/default-persona.jpg",
    type: MediaType.IMAGE,
  },
};

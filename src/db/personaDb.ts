import { MediaType } from "../types/media";
import { Persona } from "../types/persona";

export const BUGS_BUNNY: Persona = {
  id: "bugs",
  name: "Bugs Bunny",
  media: {
    url: "https://media.giphy.com/media/3osxYoCkKu892JBLUc/giphy.gif",
    type: MediaType.GIF,
  },
};

export const EINSTEIN: Persona = {
  id: "einstein",
  name: "Albert Einstein",
  media: {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    type: MediaType.IMAGE,
  },
};

export const AVAILABLE_PERSONAS: Persona[] = [BUGS_BUNNY, EINSTEIN];

export const personaDb: Map<string, Persona> = new Map(
  AVAILABLE_PERSONAS.map((p) => [p.id, p])
);

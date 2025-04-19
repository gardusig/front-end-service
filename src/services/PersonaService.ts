import { PERSONAS } from "../data/personas";
import { Persona } from "../types/Persona";

export function getPersona(personaId: string): Persona | undefined {
  return PERSONAS.find((p) => p.id === personaId);
}

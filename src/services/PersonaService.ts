import { PERSONAS } from "../data/personas";
import {
  DEFAULT_PERSONA,
  DEFAULT_PERSONA_ID,
} from "../hooks/persona/personaUtils";
import { Persona } from "../types/Persona";

export async function getPersona(personaId: string): Promise<Persona> {
  if (personaId === DEFAULT_PERSONA_ID) {
    return DEFAULT_PERSONA;
  }
  const persona = PERSONAS.find((p) => p.id === personaId);
  if (!persona) {
    throw new Error(`Persona not found with id: ${personaId}`);
  }
  return persona;
}

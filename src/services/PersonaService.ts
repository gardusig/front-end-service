import { personaDb } from "../db/personaDb";
import { Persona } from "../types/persona";

export async function createPersona(newPersona: Persona): Promise<Persona> {
  if (personaDb.has(newPersona.id)) {
    throw new Error("Persona ID already exists");
  }
  personaDb.set(newPersona.id, newPersona);
  return newPersona;
}

export async function updatePersona(
  id: string,
  updates: Partial<Persona>
): Promise<Persona> {
  const existing = personaDb.get(id);
  if (!existing) throw new Error(`Persona not found with id: ${id}`);
  const updated = { ...existing, ...updates };
  personaDb.set(id, updated);
  return updated;
}

export async function deletePersona(id: string): Promise<void> {
  if (!personaDb.delete(id)) {
    throw new Error(`Persona not found with id: ${id}`);
  }
}

export async function listPersonas(): Promise<Persona[]> {
  return Array.from(personaDb.values());
}

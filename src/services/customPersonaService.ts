import { customPersonaDb } from "../db/customPersonaDb";
import { CustomPersona } from "../types/customPersona";

export async function createCustomPersona(
  newPersona: CustomPersona
): Promise<CustomPersona> {
  if (customPersonaDb.has(newPersona.id)) {
    throw new Error(`CustomPersona ID already exists: ${newPersona.id}`);
  }
  customPersonaDb.set(newPersona.id, structuredClone(newPersona));
  return newPersona;
}

export async function updateCustomPersona(
  id: string,
  updates: Partial<CustomPersona>
): Promise<CustomPersona> {
  const existing = customPersonaDb.get(id);
  if (!existing) throw new Error(`CustomPersona not found for id: ${id}`);
  const updated = { ...existing, ...updates };
  customPersonaDb.set(id, structuredClone(updated));
  return updated;
}

export async function deleteCustomPersona(id: string): Promise<void> {
  const deleted = customPersonaDb.delete(id);
  if (!deleted) throw new Error(`CustomPersona not found for id: ${id}`);
}

export async function listCustomPersonas(): Promise<CustomPersona[]> {
  return Array.from(customPersonaDb.values());
}

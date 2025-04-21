import { personaDeckDb } from "../db/personaDeckDb";
import { PersonaDeck } from "../types/personaDeck";

export async function createPersonaDeck(
  deck: PersonaDeck
): Promise<PersonaDeck> {
  if (personaDeckDb.has(deck.id)) {
    throw new Error(`PersonaDeck already exists: ${deck.id}`);
  }
  personaDeckDb.set(deck.id, structuredClone(deck));
  return deck;
}

export async function updatePersonaDeck(
  id: string,
  updates: Partial<PersonaDeck>
): Promise<PersonaDeck> {
  const existing = personaDeckDb.get(id);
  if (!existing) throw new Error(`PersonaDeck not found: ${id}`);
  const updated = { ...existing, ...updates };
  personaDeckDb.set(id, structuredClone(updated));
  return updated;
}

export async function deletePersonaDeck(id: string): Promise<void> {
  const deleted = personaDeckDb.delete(id);
  if (!deleted) throw new Error(`PersonaDeck not found: ${id}`);
}

export async function listPersonaDecks(): Promise<PersonaDeck[]> {
  return Array.from(personaDeckDb.values()).map((value) =>
    structuredClone(value)
  );
}

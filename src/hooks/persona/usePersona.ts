import { useEffect, useState } from "react";
import { Persona } from "../../types/Persona";
import { DEFAULT_PERSONA, DEFAULT_PERSONA_ID } from "./constants";
import { getPersona } from "../../services/PersonaService";

export function usePersona(personaId: string) {
  const [persona, setPersona] = useState<Persona>(DEFAULT_PERSONA);

  function updatePersona(personaId: string) {
    if (personaId === DEFAULT_PERSONA_ID) {
      setPersona(DEFAULT_PERSONA);
    }
    const persona = getPersona(personaId);
    setPersona(persona ?? DEFAULT_PERSONA);
  }

  useEffect(() => {
    updatePersona(personaId);
  }, [personaId]);

  return {
    persona,
    updatePersona,
  };
}

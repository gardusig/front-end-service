import { useEffect, useState } from "react";
import { usePersonaContext } from "./usePersonaContext";
import { getPersona } from "../../services/PersonaService";
import { DEFAULT_PERSONA, DEFAULT_PERSONA_ID } from "./personaUtils";
import { Persona } from "../../types/Persona";

export const usePersona = () => {
  const { personaId, setPersonaId, resetPersonaId } = usePersonaContext();

  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState<Persona>(DEFAULT_PERSONA);

  useEffect(() => {
    let cancelled = false;

    const fetchPersona = async () => {
      setLoading(true);
      try {
        const fetchedPersona = await getPersona(personaId);
        if (!cancelled) {
          setPersona(fetchedPersona);
        }
      } catch (error) {
        if (!cancelled) {
          console.warn(
            `[Persona] Failed to load persona ID "${personaId}":`,
            error
          );
          setPersona(DEFAULT_PERSONA);
          setPersonaId(DEFAULT_PERSONA_ID);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchPersona();

    return () => {
      cancelled = true;
    };
  }, [personaId, setPersonaId]);

  return { persona, setPersonaId, resetPersonaId, loading };
};

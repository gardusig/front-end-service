import { useEffect, useState } from "react";
import {
  listPersonas,
  createPersona,
  updatePersona,
  deletePersona,
} from "../../services/personaService";
import { Persona } from "../../types/persona";
import { DEFAULT_PERSONA } from "./personaUtils";
import { PersonaContextType } from "./PersonaContext";

export const usePersonaContextValue = (): PersonaContextType => {
  const [personas, setPersonas] = useState<Record<string, Persona>>({});
  const [loading, setLoading] = useState(true);

  const fetchAllPersonas = () => {
    setLoading(true);
    listPersonas()
      .then((personaList) => {
        const record: Record<string, Persona> = {};
        personaList.forEach((p) => {
          record[p.id] = p;
        });
        setPersonas(record);
      })
      .catch((err) => {
        console.error("Failed to list personas:", err);
      })
      .finally(() => setLoading(false));
  };

  const getPersona = (id: string): Persona => {
    if (id === DEFAULT_PERSONA.id) {
      return DEFAULT_PERSONA;
    }
    return personas[id];
  };

  const createOrUpdatePersona = (persona: Persona) => {
    setLoading(true);

    const operation = personas[persona.id]
      ? updatePersona(persona.id, persona)
      : createPersona(persona);

    operation
      .then(fetchAllPersonas)
      .catch((err) => console.error("Failed to save persona:", err))
      .finally(() => setLoading(false));
  };

  const removePersona = (id: string) => {
    setLoading(true);
    deletePersona(id)
      .then(fetchAllPersonas)
      .catch((err) => console.error("Failed to delete persona:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAllPersonas();
  }, []);

  return {
    personas,
    loading,
    getPersona,
    createOrUpdatePersona,
    removePersona,
    fetchAllPersonas,
  };
};

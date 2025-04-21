import { useEffect, useState } from "react";
import {
  listCustomPersonas,
  deleteCustomPersona,
  createCustomPersona,
  updateCustomPersona,
} from "../../services/customPersonaService";
import { CustomPersona } from "../../types/customPersona";
import { DEFAULT_CUSTOM_PERSONAS } from "./customPersonaUtils";
import { CustomPersonaContextType } from "./CustomPersonaContext";
import { getRecordFromList } from "../hookUtil";

export const useCustomPersonaContext = (): CustomPersonaContextType => {
  const [customPersonas, setCustomPersonas] = useState<
    Record<string, CustomPersona>
  >(getRecordFromList(DEFAULT_CUSTOM_PERSONAS));
  const [loading, setLoading] = useState(true);

  const fetchAllCustomPersonas = () => {
    setLoading(true);
    listCustomPersonas()
      .then((customPersonaList) => {
        const customPersonaListRecord = getRecordFromList(customPersonaList);
        setCustomPersonas(customPersonaListRecord);
      })
      .catch((err) => console.warn("Failed to list custom personas:", err))
      .finally(() => setLoading(false));
  };

  const createOrUpdateCustomPersona = (persona: CustomPersona) => {
    setLoading(true);
    const saveOp = customPersonas[persona.id]
      ? updateCustomPersona(persona.id, persona)
      : createCustomPersona(persona);
    saveOp
      .then(fetchAllCustomPersonas)
      .catch((err) => console.error("Failed to save custom persona:", err))
      .finally(() => setLoading(false));
  };

  const removeCustomPersona = (id: string) => {
    setLoading(true);
    deleteCustomPersona(id)
      .then(fetchAllCustomPersonas)
      .catch((err) => {
        console.error("Failed to delete custom persona:", err);
        setLoading(false);
      });
  };

  const getCustomPersona = (id: string) => {
    return customPersonas[id];
  };

  useEffect(() => {
    fetchAllCustomPersonas();
  }, []);

  return {
    customPersonas,
    loading,
    getCustomPersona,
    createOrUpdateCustomPersona,
    removeCustomPersona,
    fetchAllCustomPersonas,
  };
};

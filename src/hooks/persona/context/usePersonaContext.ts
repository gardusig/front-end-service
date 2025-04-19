import { useContext } from "react";
import { PersonaContext } from "./PersonaContext";
import { usePersona } from "../usePersona";

export function usePersonaContext() {
  const { personaId, setPersonaId } = useContext(PersonaContext);
  const { persona } = usePersona(personaId);

  return { persona, updatePersona: setPersonaId };
}

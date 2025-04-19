import { createContext } from "react";
import { DEFAULT_PERSONA_ID } from "../constants";

export const PersonaContext = createContext<{
    personaId: string;
    setPersonaId: (id: string) => void;
}>({
    personaId: DEFAULT_PERSONA_ID,
    setPersonaId: () => { },
});

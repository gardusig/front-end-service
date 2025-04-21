import { createContext } from "react";
import { Persona } from "../../types/persona";
import { DEFAULT_PERSONA } from "./personaUtils";

export type PersonaContextType = {
    personas: Record<string, Persona>;
    loading: boolean;
    getPersona: (id: string) => Persona;
    createOrUpdatePersona: (persona: Persona) => void;
    removePersona: (id: string) => void;
    fetchAllPersonas: () => void;
};

export const PersonaContext = createContext<PersonaContextType>({
    personas: {},
    loading: true,
    getPersona: () => DEFAULT_PERSONA,
    createOrUpdatePersona: () => { },
    removePersona: () => { },
    fetchAllPersonas: () => { }
});

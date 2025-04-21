import { createContext } from "react";
import { Persona } from "../../types/persona";

export type PersonaContextType = {
    personas: Record<string, Persona>;
    loading: boolean;
    getPersona: (id: string) => Persona | undefined;
    createOrUpdatePersona: (persona: Persona) => void;
    removePersona: (id: string) => void;
    fetchAllPersonas: () => void;
};

export const PersonaContext = createContext<PersonaContextType>({
    personas: {},
    loading: true,
    getPersona: () => undefined,
    createOrUpdatePersona: () => { },
    removePersona: () => { },
    fetchAllPersonas: () => { }
});

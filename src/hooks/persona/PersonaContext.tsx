import { createContext } from "react";

export type PersonaContextType = {
    personaId: string;
    setPersonaId: (id: string) => void;
    resetPersonaId: () => void;
};

export const PersonaContext = createContext<PersonaContextType>({
    personaId: "",
    setPersonaId: () => { },
    resetPersonaId: () => { },
});

import { useState, ReactNode } from "react";
import { PersonaContext } from "./PersonaContext";
import { DEFAULT_PERSONA_ID } from "../constants";

export function PersonaProvider({ children }: { children: ReactNode }) {
    const [personaId, setPersonaId] = useState(DEFAULT_PERSONA_ID);
    return (
        <PersonaContext.Provider value={{ personaId, setPersonaId }}>
            {children}
        </PersonaContext.Provider>
    );
}

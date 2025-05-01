import { ReactNode } from "react";
import { PersonaContext } from "./PersonaContext";
import { usePersonaContextValue } from "./usePersonaContext";

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
    const value = usePersonaContextValue();

    return (
        <PersonaContext.Provider value={value}>
            {children}
        </PersonaContext.Provider>
    );
};

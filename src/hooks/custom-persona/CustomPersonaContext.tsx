import { createContext } from "react";
import { CustomPersona } from "../../types/customPersona";

export type CustomPersonaContextType = {
    customPersonas: Record<string, CustomPersona>;
    loading: boolean;
    getCustomPersona: (id: string) => CustomPersona | undefined;
    createOrUpdateCustomPersona: (persona: CustomPersona) => void;
    removeCustomPersona: (id: string) => void;
    fetchAllCustomPersonas: () => void;
};

export const CustomPersonaContext = createContext<CustomPersonaContextType>({
    customPersonas: {},
    loading: true,
    getCustomPersona: () => undefined,
    createOrUpdateCustomPersona: () => { },
    removeCustomPersona: () => { },
    fetchAllCustomPersonas: () => { },
});

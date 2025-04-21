import { createContext } from "react";
import { CustomPersona } from "../../types/customPersona";
import { DEFAULT_CUSTOM_PERSONA } from "./customPersonaUtils";

export type CustomPersonaContextType = {
    customPersonas: Record<string, CustomPersona>;
    loading: boolean;
    getCustomPersona: (id: string) => CustomPersona;
    createOrUpdateCustomPersona: (persona: CustomPersona) => void;
    removeCustomPersona: (id: string) => void;
    fetchAllCustomPersonas: () => void;
};

export const CustomPersonaContext = createContext<CustomPersonaContextType>({
    customPersonas: {},
    loading: true,
    getCustomPersona: () => DEFAULT_CUSTOM_PERSONA,
    createOrUpdateCustomPersona: () => { },
    removeCustomPersona: () => { },
    fetchAllCustomPersonas: () => { },
});

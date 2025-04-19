import { useEffect, useReducer } from "react";
import { PersonaContext } from "./PersonaContext";
import { DEFAULT_PERSONA_ID } from "./personaUtils";

const STORAGE_KEY = "selected_persona_id";

type Action =
    | { type: "SET_ID"; payload: string }
    | { type: "RESET" };

const personaIdReducer = (state: string, action: Action): string => {
    switch (action.type) {
        case "SET_ID":
            return action.payload;
        case "RESET":
            return DEFAULT_PERSONA_ID;
        default:
            return state;
    }
};

export const PersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [personaId, dispatch] = useReducer(personaIdReducer, DEFAULT_PERSONA_ID, () => {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_PERSONA_ID;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, personaId);
    }, [personaId]);

    const setPersonaId = (id: string) => dispatch({ type: "SET_ID", payload: id });
    const resetPersonaId = () => dispatch({ type: "RESET" });

    return (
        <PersonaContext.Provider value={{ personaId, setPersonaId, resetPersonaId }}>
            {children}
        </PersonaContext.Provider>
    );
};

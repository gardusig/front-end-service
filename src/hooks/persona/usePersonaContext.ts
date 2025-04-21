import { useEntityContext } from "../useEntityContext";
import {
    listPersonas,
    createPersona,
    updatePersona,
    deletePersona,
} from "../../services/personaService";
import { Persona } from "../../types/persona";
import { DEFAULT_PERSONA } from "./personaUtils";

export const usePersonaContextValue = () => {
    return useEntityContext<Persona>({
        listFn: listPersonas,
        createFn: createPersona,
        updateFn: updatePersona,
        deleteFn: deletePersona,
        defaultEntity: DEFAULT_PERSONA,
    });
};

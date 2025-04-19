import { Persona } from "../../types/Persona";
import { DEFAULT_PERSONA } from "./personaUtils";

type Action = { type: "SET"; payload: Persona } | { type: "RESET" };

export const personaReducer = (state: Persona, action: Action): Persona => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "RESET":
      return DEFAULT_PERSONA;
    default:
      return state;
  }
};

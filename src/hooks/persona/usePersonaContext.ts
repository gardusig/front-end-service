import { useContext } from "react";
import { PersonaContext } from "./PersonaContext";

export const usePersonaContext = () => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error("usePersonaContext must be used within a PersonaProvider");
  }
  return context;
};

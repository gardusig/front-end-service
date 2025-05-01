
import { CustomPersonaProvider } from "./custom-persona/CustomPersonaProvider";
import { PersonaDeckProvider } from "./persona-deck/PersonaDeckProvider";
import { PersonaProvider } from "./persona/PersonaProvider";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <PersonaProvider>
            <CustomPersonaProvider>
                <PersonaDeckProvider>
                    {children}
                </PersonaDeckProvider>
            </CustomPersonaProvider>
        </PersonaProvider>
    );
};

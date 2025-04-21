import { PersonaDeckContext } from "./PersonaDeckContext";
import { usePersonaDeckContext } from "./usePersonaDeckContext";

export const PersonaDeckProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const contextValue = usePersonaDeckContext();

    return (
        <PersonaDeckContext.Provider value={contextValue}>
            {children}
        </PersonaDeckContext.Provider>
    );
};

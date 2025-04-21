import { PersonaDeckListContext } from "./PersonaDeckContext";
import { usePersonaDeckContext } from "./usePersonaDeckContext";

export const PersonaDeckProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const contextValue = usePersonaDeckContext();

    return (
        <PersonaDeckListContext.Provider value={contextValue}>
            {children}
        </PersonaDeckListContext.Provider>
    );
};

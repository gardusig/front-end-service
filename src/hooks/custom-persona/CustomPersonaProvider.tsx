import { CustomPersonaContext } from "./CustomPersonaContext";
import { useCustomPersonaContext } from "./useCustomPersonaContext";

export const CustomPersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const value = useCustomPersonaContext();

    return (
        <CustomPersonaContext.Provider value={value}>
            {children}
        </CustomPersonaContext.Provider>
    );
};

import { useCustomPersonaContext } from "../hooks/custom-persona/useCustomPersonaContext";

export default function ListCustomPersona() {
    const {
        customPersonas,
        loadingList,
        deleteAndReloadCustomPersona,
    } = useCustomPersonaContext();

    if (loadingList) {
        return (
            <p className="text-center text-gray-300">Loading personas...</p>
        );
    }

    if (len(customPersonas)) {
        return (
            <p className="text-center text-gray-400 italic">
                You haven’t added any personas yet.
            </p>
        );
    }

    return (
        <ul className="space-y-4 max-w-3xl mx-auto">
            {personaList.map((persona) => (
                <li key={persona.id}>
                    <PersonaCard
                        persona={persona}
                        onDelete={() => deleteAndReloadCustomPersona(persona.id)}
                    />
                </li>
            ))}
        </ul>
    );
}


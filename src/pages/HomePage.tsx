import { Link } from "react-router-dom";
import { JSX } from "react";

export default function HomePage(): JSX.Element {
    return (
        <main className="min-h-screen p-6 bg-gray-900 text-white">
            <section className="max-w-2xl mx-auto text-center space-y-6">
                <header>
                    <h1 className="text-4xl font-bold">🎨 Character Editor</h1>
                    <p className="text-gray-300 mt-2">Select and manage your custom personas and decks.</p>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    <Link
                        to="/personas"
                        className="block p-6 rounded-lg bg-blue-700 hover:bg-blue-800 transition-colors text-white shadow-md"
                    >
                        <h2 className="text-xl font-semibold mb-2">🎭 Custom Personas</h2>
                        <p className="text-sm text-gray-200">Edit, label, and manage your personas.</p>
                    </Link>

                    <Link
                        to="/decks"
                        className="block p-6 rounded-lg bg-purple-700 hover:bg-purple-800 transition-colors text-white shadow-md"
                    >
                        <h2 className="text-xl font-semibold mb-2">🗂️ Persona Decks</h2>
                        <p className="text-sm text-gray-200">Organize personas into labeled decks.</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}

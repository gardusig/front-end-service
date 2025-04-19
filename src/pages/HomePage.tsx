import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-6 bg-white text-gray-800">
            <h1 className="text-4xl font-bold">Welcome to Persona Editor</h1>
            <p className="text-lg text-gray-600">Start editing your characters with just a click.</p>
            <Link
                to="/editor"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go to Editor
            </Link>
        </main>
    );
}

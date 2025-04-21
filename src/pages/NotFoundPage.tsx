import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-900 text-white">
            <div className="max-w-md">
                <h1 className="text-5xl font-extrabold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-base mb-6">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    ⬅ Back to Home
                </Link>
            </div>
        </main>
    );
}

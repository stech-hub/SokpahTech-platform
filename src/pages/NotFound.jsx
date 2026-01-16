import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-pink-500">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Page not found
      </p>
      <Link
        to="/"
        className="bg-pink-500 text-white px-6 py-2 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}

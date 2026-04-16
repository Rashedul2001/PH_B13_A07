import { NavLink } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-100 to-gray-900 text-center">
            <h1 className="text-9xl font-extrabold text-green-900">404</h1>
            <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                Oops! Page not found
            </h2>
            <p className="mt-2 text-lg text-white opacity-50 max-w-md">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <NavLink
                to="/"
                className="mt-6 px-6 py-3 bg-green-900 text-white rounded-lg shadow-md hover:bg-green-700 transition"
            >
                Go Home
            </NavLink>
        </div>
    );
};

export default NotFound;

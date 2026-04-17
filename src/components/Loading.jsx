const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-green-900 border-t-transparent rounded-full animate-spin"></div>

            {/* Message */}
            <p className="mt-6 text-lg font-medium text-gray-700">
                Loading, please wait...
            </p>
        </div>
    );
};

export default Loading;

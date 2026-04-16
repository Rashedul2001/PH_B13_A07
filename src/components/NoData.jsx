const NoData = () => {
    return (
        <section className="flex flex-col items-center justify-center py-16 px-4 bg-gray-50 rounded-lg shadow-sm text-center">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
                Currently there is no data to show here
            </h2>
            <p className="text-lg text-gray-700 max-w-md mb-6">
                Please interact with your friends to see the data. Once you start engaging, your analytics will appear here.
            </p>
        </section>
    );
};

export default NoData;

import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="ml-3 text-lg text-gray-700">Loading...</p>
        </div>
    );
};

export default Loading;


import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-bars loading-xl"></span>
            <span className="loading loading-bars loading-xl rotate-180"></span>
        </div>
    );
};

export default Loading;
import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex">
                <div className="spinner-border animate-spin inline-block bg-slate-500 w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
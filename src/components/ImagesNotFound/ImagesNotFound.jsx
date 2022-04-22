import React from 'react';

const ImagesNotFound = ({ error }) => {
    return (
        <div className="Error">
            <h2>{error}</h2>
        </div>
    );
};

export default ImagesNotFound;

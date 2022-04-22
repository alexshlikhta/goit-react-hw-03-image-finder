import React from 'react';

const ImagesMoreButton = ({ loadMore, onClick }) => {
    return (
        <>
            {loadMore && (
                <div className="ButtonWrap">
                    <button className="Button" type="button" onClick={onClick}>
                        Load more
                    </button>
                </div>
            )}
        </>
    );
};

export default ImagesMoreButton;

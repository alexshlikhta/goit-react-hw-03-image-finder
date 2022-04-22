import React from 'react';

const ImagesGalleryItem = ({ id, previewURL, onClick }) => {
    return (
        <li className="ImageGalleryItem" key={id}>
            <img className="ImageGalleryItem-image" src={previewURL} onClick={onClick} alt="" />
        </li>
    );
};
export default ImagesGalleryItem;

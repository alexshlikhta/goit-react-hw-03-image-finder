import React, { Component } from 'react';
import ImagesGalleryItem from '../ImagesGalleryItem';
import ImagesModal from '../ImagesModal';

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        imagesModal: '',
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    modalClick = largeImageURL => {
        this.setState({ imagesModal: largeImageURL });
        this.toggleModal();
    };

    render() {
        const { images } = this.props;
        const { imagesModal, showModal } = this.state;

        return (
            <>
                <ul className="ImageGallery">
                    {images.map(({ id, previewURL, largeImageURL }) => (
                        <ImagesGalleryItem
                            key={id}
                            previewURL={previewURL}
                            onClick={() => {
                                this.modalClick(largeImageURL);
                            }}
                        />
                    ))}
                </ul>
                {showModal && (
                    <ImagesModal imagesModal={imagesModal} onClose={this.toggleModal} />
                )}
            </>
        );
    }
}

import React, { Component } from 'react';
import ImageGallery from '../ImageGallery';
import ImagesAPI from '../../services/Images_api';
import ImagesMoreButton from '../ImagesMoreButton';
import ImagesLoader from '../ImagesLoader/ImagesLoader';
import ImagesNotFound from '../ImagesNotFound';
import ImagesDefaults from '../ImagesDefaults/ImagesDefaults';

export default class ImageRender extends Component {
    state = {
        error: false,
        loadMore: false,
        imagesArr: [],
        status: 'idle',
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        let prevQuery = prevProps.imageQuery,
            currQuery = this.props.imageQuery;

        if (prevQuery !== currQuery) {
            this.setState({ status: 'pending' });
            this.cleanImages();
            this.searchImages();
        }

        if (prevState.page !== this.state.page) {
            this.setState({ status: 'pending' });
            this.searchImages();
        }
    }

    scrollTo = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
            block: 'end',
        });
    };

    cleanImages = () => {
        this.setState({ imagesArr: [], page: 1 });
    };

    searchImages = () => {
        this.setState({ status: 'pending' });

        const { page } = this.state;
        const { imageQuery } = this.props;

        if(imageQuery === '') {
            this.setState({status: 'idle'})
        } else {
            ImagesAPI(imageQuery, page)
            .then(query => {
                if (query.hits.length === 0) {
                    return Promise.reject(new Error(`Results for: ${imageQuery}  not found.`));
                } else {
                    this.setState({
                        imagesArr: [...this.state.imagesArr, ...query.hits],
                        status: 'resolved',
                        loadMore: true,
                    });
                    this.scrollTo();

                    if (query.hits.length < 12) {
                        this.setState({ loadMore: false });
                    } 
                }
            })
            .catch(error => this.setState({ error: error, status: 'rejected' }));
        }
    };

    loadMoreImages = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
        this.scrollTo();
    };

    render() {
        const { imagesArr, status, error, loadMore } = this.state;
        if (status === 'idle') {
            return <ImagesDefaults />;
        }

        if (status === 'pending') {
            return (
                <>
                    <ImagesLoader />
                    <ImageGallery images={imagesArr} />
                </>
            );
        }

        if (status === 'rejected') {
            return (
                <ImagesNotFound error={error.message} />
            )
        }

        if (status === 'resolved') {
            return (
                <>
                    <ImageGallery images={imagesArr} />
                    <ImagesMoreButton onClick={this.loadMoreImages} loadMore={loadMore}></ImagesMoreButton>
                </>
            );
        }
    }
}

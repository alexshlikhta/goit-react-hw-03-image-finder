import './App.css';
import React, { Component } from 'react';
import ImagesSearchbar from './components/ImagesSearchbar';
import ImagesRender from './components/ImagesRender';

export default class App extends Component {
    state = {
        query: '',
    };

    handleSubmit = query => {
        this.setState({ query });
    };

    render() {
        return (
            <div className="App">
                <ImagesSearchbar onSubmit={this.handleSubmit} />
                <ImagesRender imageQuery={this.state.query} />
            </div>
        );
    }
}

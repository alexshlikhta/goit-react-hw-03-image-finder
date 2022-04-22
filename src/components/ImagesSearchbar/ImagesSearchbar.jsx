import React, { Component } from 'react';

export default class ImagesSearchbar extends Component {
    state = {
        inputQuery: '',
    };

    onSearchInputChange = e => {
        this.setState({
            inputQuery: e.target.value,
        });
    };

    onSearchBarSubmit = e => {
        e.preventDefault();

        let queriedValue = this.state.inputQuery.toLowerCase().trim();
        this.props.onSubmit(queriedValue);
    };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.onSearchBarSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        value={this.state.inputQuery}
                        onChange={this.onSearchInputChange}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

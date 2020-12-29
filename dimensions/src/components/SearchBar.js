import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
    state = {
        searchText: ''
    }

    handleSubmit = (event) => {
        this.props.handleSearchClick(event, this.state.searchText);
        event.preventDefault();
    }

    handleOnChange = (event) => {
        this.setState({ searchText: event.target.value });
        event.preventDefault();
    }

    render() {
        return (
            <div className="add-padding bg-light row search-bar">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2"
                        type="text"
                        style={{minWidth: '321px'}}
                        placeholder={this.props.placeholderText}
                        value={this.state.searchText}
                        onChange={this.handleOnChange}
                        required={this.props.required} />
                    <button className="btn btn-outline-success my-2 my-sm-0">
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
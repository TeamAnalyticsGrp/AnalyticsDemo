import React, { Component } from 'react';
import SearchBar from './SearchBar';
import DataGrid from './UsersGrid';

class AllUsers extends Component {

    handleSearch = (searchText) => {
        console.log(searchText);
    }

    render() {
        return (
            <div>
                <SearchBar placeholderText='Search by user name' handleSearchClick={this.handleSearch}/>
                <DataGrid></DataGrid>

            </div>
        )
    }
}

export default AllUsers;
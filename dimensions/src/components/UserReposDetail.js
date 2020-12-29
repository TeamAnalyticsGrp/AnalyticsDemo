import React, { Component } from 'react';
import DataGrid from './UserReposDetailGrid';
import SearchBar from './SearchBar';

class UserReposDetail extends Component {
  handleSearch = (searchText) => {
    console.log(searchText);
  }

  render() {
    return (
      <>
        <SearchBar placeholderText='Search user repos' handleSearchClick={this.handleSearch}></SearchBar>
        <DataGrid></DataGrid>
      </>
    )
  }
}

export default UserReposDetail;
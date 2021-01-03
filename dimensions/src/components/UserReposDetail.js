import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import DataGrid from './UserReposDetailGrid';
import SearchBar from './SearchBar';
let data = [];
let match = {};

class UserReposDetail extends Component {

  constructor(props) {
    super(props);
    match = props.match;
  }

  componentDidMount() {
    this.getData(match);
  }

  getData = (match) => {
    axios.get(`https://api.github.com/users/${match.params.login}/repos`)
      .then((value) => {
        data = value.data;
        this.setState({ filteredData: value.data });
        this.setState({ key: this.state.key + 1 });
      });
  }


  state = {
    key: 0,
    filteredData: []
  }

  handleSearch = (event, searchText) => {
    let filteredData = [];
    if (!_.isEmpty(searchText)) {
      filteredData = _.filter(data, (repos) => {
        return _.includes(`${_.toLower(repos.name)}`, `${_.toLower(searchText)}`);
      });
    } else {
      filteredData = data;
    }

    this.setState({ filteredData: filteredData });
    this.setState({ key: this.state.key + 1 });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <SearchBar placeholderText='Search user repos' required={false} handleSearchClick={this.handleSearch}></SearchBar>
        <DataGrid key={this.state.key} data={this.state.filteredData} />
      </>
    )
  }
}

export default UserReposDetail;
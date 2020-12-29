import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from './SearchBar';
import DataGrid from './UsersGrid';
let data = [];

class AllUsers extends Component {

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get('https://api.github.com/users?since=13500')
            .then((value) => {
                data = value.data;

                this.setState({ filteredData: value.data });
                this.setState({ key: ++this.state.key });
            });
    }

    state = {
        key: 0,
        filteredData: []
    }

    handleSearch = (event, searchText) => {
        let filteredData = [];
        if (!_.isEmpty(searchText)) {
            filteredData = _.filter(data, (user) => {
                return _.includes(`${user.login}`, `${searchText}`);
            });
        } else {
            filteredData = data;
        }

        //console.log('data', data, 'filtereddata', this.state.filteredData);

        this.setState({ filteredData: filteredData });
        this.setState({ key: ++this.state.key });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <SearchBar placeholderText='Search by login id' required={false} handleSearchClick={this.handleSearch} />
                <DataGrid key={this.state.key} data={this.state.filteredData} />
            </div>
        )
    }
}

export default AllUsers;
import React, { Component } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UsersGrid extends Component {

  state = {
    data: this.props.data,
    skip: 0, take: 10,
    sort: [
      { field: 'login', dir: 'asc' }
    ]
  }

  pageChange = (event) => {
    this.setState({
      skip: event.page.skip,
      take: event.page.take
    });
  }

  imgCell = (props) => {
    return (
      <td>
        <img src={props.dataItem.avatar_url} style={{ width: 50, height: 50 }} />
      </td>
    )
  }

  repoLinkCell = (props) => {
    return (
      <td>
        <Link to={`/user-repos-detail/${props.dataItem.login}`}>{`Go to ${props.dataItem.login}'s repos`}</Link>
      </td>
    )
  }

  render() {
    return (
      <div className="Grid">
        <Grid
          data={filterBy(orderBy(this.state.data.slice(this.state.skip, this.state.take + this.state.skip), this.state.sort), this.state.filter)}
          skip={this.state.skip}
          take={this.state.take}
          total={this.state.data.length}
          pageable={true}
          sortable={true}
          sort={this.state.sort}
          filterable={true}
          filter={this.state.filter}
          onSortChange={(e) => {
            this.setState({
              sort: e.sort
            });
          }}
          onFilterChange={(e) => {
            this.setState({
              filter: e.filter
            });
          }}
          onPageChange={this.pageChange}
          style={{ height: "500px" }}>
          <GridColumn field="login" title="Login Id" />
          <GridColumn field="avatar_url" title="Avatar" cell={this.imgCell} />
          <GridColumn field="repos_url" title="Repos" cell={this.repoLinkCell} />
        </Grid>
      </div>
    );
  }
}

export default UsersGrid;
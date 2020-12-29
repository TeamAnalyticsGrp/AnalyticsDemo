import React, { Component } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';




class UserDetailsGrid extends Component {


  state = {
    data: [],
    skip: 0, take: 10,
    sort: [
      { field: 'name', dir: 'asc' }
    ]
  }
  
  pageChange = (event) => {
    this.setState({
      skip: event.page.skip,
      take: event.page.take
    });
  }


  render() {
    return (
      <div className="Grid">
        <Grid
          data={filterBy(orderBy(this.state.data.slice(this.state.skip, this.state.take + this.state.skip), this.state.sort),this.state.filter)}
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
          <GridColumn field="name" title="Name" />
          <GridColumn field="description" title="Description" />
          <GridColumn field="private" title="Private" />
          <GridColumn field="language" title="Language" />
        </Grid>
      </div>
    );
  }
}




export default UserDetailsGrid;
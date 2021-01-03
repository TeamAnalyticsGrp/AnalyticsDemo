import React, { Component } from 'react';
import { Grid, GridColumn, GridColumnMenuFilter } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';
//import CustomBooleanUiFilter from '../utils/CustomBooleanUiFilter';


class UserDetailsGrid extends Component {


  state = {
    data: this.props.data,
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

  expandChange = (event) => {
    event.dataItem[event.target.props.expandField] = event.value;
    this.setState({
      data: Object.assign({}, this.state.data),
      dataState: this.state.dataState
    });
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
          groupable={true}
          sortable={true}
          editable={true}
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
          // onExpandChange={this.expandChange}
          // expandField="expanded"
          style={{ height: "500px" }}>
          <GridColumn field="name" title="Name" />
          <GridColumn field="description" title="Description" editable={true} />
          <GridColumn field="private"
            title="Private Repo"
            filter={'boolean'}
          // columnMenu={
          //   props =>
          //     <GridColumnMenuFilter
          //       {...props}
          //       filterUI={CustomBooleanUiFilter}
          //     />
          //  }
          />
          <GridColumn field="language" title="Language" />
          {/* <GridColumn field="created_at" title="Created" filter={'date'} format='{0:"g"}' /> */}
        </Grid>
      </div>
    );
  }
}


export default UserDetailsGrid;
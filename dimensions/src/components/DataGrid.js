import React, { Component } from 'react';
import categories from '../categories.json';
import products from '../products.json';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';




class DataGrid extends Component {

  state = {
    products,
    skip: 0, take: 10,
    // filter: {
    //   logic: "and",
    //   filters: [
    //     { field: "ProductName", operator: "contains", value: "Tea" }
    //   ]
    // },
    sort: [
      { field: 'ProductName', dir: 'asc' }
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
          data={filterBy(orderBy(products.slice(this.state.skip, this.state.take + this.state.skip), this.state.sort),this.state.filter)}
          skip={this.state.skip}
          take={this.state.take}
          total={products.length}
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
          <GridColumn field="ProductName" title="Product Name" />
          <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
          <GridColumn field="UnitsInStock" title="Units in Stock" />
          <GridColumn field="Discontinued" cell={checkboxColumn} />
        </Grid>
      </div>
    );
  }
}


class checkboxColumn extends Component {

  onCheckBoxChange = (event) => {
    console.log(event.target.checked, this.props.dataItem[this.props.field]);
    //this.setState({ 'this.props.dataItem[this.props.field]': event.target.checked });
    this.setState();
  }

  render() {
    return (
      <td>
        <input type="checkbox" checked={this.props.dataItem[this.props.field]} onChange={this.onCheckBoxChange} />
      </td>
    );
  }
}

export default DataGrid;
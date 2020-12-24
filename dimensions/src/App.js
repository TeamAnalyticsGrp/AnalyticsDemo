import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import DataGrid from './DataGrid';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <DataGrid></DataGrid>
        <Footer></Footer>
      </React.Fragment>
    )
  }
}

export default App;
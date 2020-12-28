import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import DataGrid from './components/DataGrid';
import Footer from './components/Footer';


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
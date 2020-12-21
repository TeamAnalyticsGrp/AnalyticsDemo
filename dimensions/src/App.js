import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import DataGrid from './DataGrid';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <DataGrid></DataGrid>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
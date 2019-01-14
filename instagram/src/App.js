import React, { Component } from 'react';
import './App.css';
import dummyData from './Components/dummy-data'
import SearchBar from './Components/SearchBar/SearchBar'

import './Components/SearchBar/SearchBar.css'



class App extends Component {
  constructor () {
    super();
    this.state = {
      dataList: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;

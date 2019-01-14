import React, { Component } from 'react';
import './App.css';
import dummyData from './Components/dummy-data'
import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer'

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
        <PostContainer instaDataList={this.state.dataList}/>
      </div>
    );
  }
}

export default App;

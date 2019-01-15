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
      dataList: [],
      searchText: '',
      searchPosts: []
    };
  }

  componentDidMount() {
    this.setState({ dataList: dummyData });
  }

  handleSearch = ev => {
    this.setState({
      searchText: ev.target.value
    });
  };

  searchUsers = ev => {
    ev.preventDefault();
    const searched = this.state.dataList.filter((search) => {
      return search.username.includes(this.state.searchText);
    });
    console.log(searched);
    this.setState({searchPosts: searched});
  }



  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchUsers} handleSearch={this.handleSearch}/>
        <PostContainer instaDataList={this.state.searchPosts.length > 0 ? this.state.searchPosts : this.state.dataList}/>
      </div>
    );
  }
}

export default App;

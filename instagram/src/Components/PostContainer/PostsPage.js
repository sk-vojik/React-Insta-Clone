import React from "react"
import dummyData from '../dummy-data'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

class PostsPage extends React.Component {
  constructor () {
    super();
    this.state = {
      dataList: [],
      searchText: '',
      searchPosts: [],
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.setState({ dataList: dummyData });
    this.setState({ isLoggedIn: true })
  }

  handleSearch = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  searchUsers = ev => {
    ev.preventDefault();
    this.setState({
      searchPosts: this.state.dataList.filter((userSearch) => {
      return userSearch.username.includes(this.state.searchText);
      })
    });
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

export default PostsPage
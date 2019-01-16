import React from 'react';
import './App.css';
import './Components/SearchBar/SearchBar.css'

import PostsPage from "./Components/PostContainer/PostsPage"
import authenticate from './Components/Authentication/authenticate';
import Login from './Components/Login/Login'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <>
        <PostsPage />
      </>
    )
  }
  
  
}




export default authenticate(App)(Login);

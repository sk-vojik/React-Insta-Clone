import React from "react"

const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem('SK')) {
        this.setState({ isLoggedIn: true });
      }
    }
    render() {
      if (this.state.isLoggedIn) return <App />;
      return <Login />;
    }
  };

  
export default authenticate;
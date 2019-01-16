import React from "react"

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleLogin = e => {
    e.preventDefault();
    localStorage.setItem(`${this.state.username}`, `${this.state.password}`);
    this.setState({ isLoggedIn: true });
  }

  

  render() {
    return (
      <div className="login-container">
        <form>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
          <button onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    )
  }
}
  

export default Login
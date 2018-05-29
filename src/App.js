import React, { Component } from 'react';
import './App.css';


let imageSource = ""
let gitName = ""
let repoCount = ""
let profileURL = ""

class App extends Component {

  state = {
    user: {},
    active: false,
  }

  fetchFunction = () => {
    fetch("https://api.github.com/users/Bensch97")
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        imageSource = data.avatar_url;
        gitName = data.login;
        repoCount = data.public_repos;
        profileURL = data.html_url;
        this.setState({ user: data.login, active: !this.state.active })
        console.log(data)
      })

  }

  render() {
    const active = this.state.active
    const profile = active ? (
      <div id="profile">
      <img src={imageSource} />
      <p>{gitName}</p>
      <p>Repository Count: {repoCount}</p>
      <p>Profile URL: {profileURL}</p>
      </div>) : (<div></div>)
    return (
      <React.Fragment>
        <div id="button">
          <button onClick={this.fetchFunction}>Get User Profile</button>
        </div>
          {profile}
      </React.Fragment>
    );
  };
}

export default App;

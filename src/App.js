import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
const gitHubInfoAPI = 'https://api.github.com/users/';
const gitHubScoreAPI = 'https://api.github.com/search/users?q=';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userScore: 0,
      isLoaded: false,
      searchUsername: 'PCDSandwichMan'
    };
  }

  fetchProfile(username) {
    let mainUrl = `${gitHubInfoAPI}${username}`;
    let scoreUrl = `${gitHubScoreAPI}${username}`;
    fetch(mainUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(error => {
        console.log(this.state.userScore);
        console.log(`Oops! There Is A Problem. ===> ${error}`);
      });

    fetch(scoreUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          userScore: data.items[0].score
        });
      })
      .catch(error => {
        this.setState({ userScore: 0 });
        console.log('Oops! There Is A Problem.');
      });
  }

  componentDidMount() {
    this.fetchProfile(
      this.state.username ? this.state.username : 'PCDSandwichMan'
    );
  }

  // ? Searches for new user
  searchUser = testHolder => {
    this.setState({
      searchUsername: testHolder,
      userScore: 0,
    });
    this.fetchProfile(testHolder);
  };

  render() {
    let { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div id="container-loading">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="app-container">
            <Users
              user={this.state.users}
              userScore={this.state.userScore}
              searchUser={this.searchUser}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;

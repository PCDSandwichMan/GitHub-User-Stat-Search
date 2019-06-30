import React, { Component } from 'react';
import UserCard from './UserCard';

class Users extends Component {
  render() {
    const {
      login,
      avatar_url,
      html_url,
      followers,
      public_repos,
      location,
      bio
    } = this.props.user;
    return (
      <UserCard
        userName={login}
        profilePic={avatar_url}
        pageLink={html_url}
        userFollowers={followers}
        userRepos={public_repos}
        userLocation={location}
        userBio = {bio}
        userScore = {this.props.userScore}
        searchUser  = {this.props.searchUser}
      />
    );
  }4
}

export default Users;

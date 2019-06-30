import React, { Component } from 'react';
import './UserCard.css';
import defaultFace from '../images/defaultFace.jpg';

class UserCard extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      userName,
      profilePic,
      pageLink,
      userFollowers,
      userRepos,
      userScore,
      userLocation,
      userBio
    } = this.props;
    return (
      <div className="container-card">
        {/* New User Input */}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter GitHub Username + Enter/Return"
            value={this.state.title}
            onChange={this.onChange}
            autoComplete="off"
          />
        </form>
        {/* User Personal Section */}
        <div className="contianer-allInfo">
          <div id="personal-info">
            <img src={profilePic ? profilePic : defaultFace} alt="User profile logo" />
            <div id="personal-text">
              <h2 id="card-name" href={pageLink}>{userName ? userName : 'Unkown Man'}</h2>
              <h3 id="card-location">{userName ? userLocation : 'Oops! -- Try Again : We Could Not Find The User Your Are Looking For'}</h3>
              <h4 id="card-bio">{userBio ? userBio : null}</h4>
            </div>
          </div>
          {/* User States Section */}
          <div id="public-info">
            <h1>User Stats</h1>
            <h6 className='public-info-label'>GitHub Score</h6>
            <section id="stars">
              <i className="fas fa-trophy"></i>
              <h3>{userScore ? userScore : 0}</h3>
            </section>
            <h6 className='public-info-label'>Repos</h6>
            <section id="repos">
              <i className="far fa-file-alt" />
              <h3>{userRepos > .5 ? userRepos : 0}</h3>
            </section>
            <h6 className='public-info-label'>Followers</h6>
            <section id="followers">
              <i className="fas fa-users" />
              <h3>{userFollowers > .5 ? userFollowers : 0}</h3>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;

import React from "react";
import PropTypes from "prop-types";
import AppCard from "./AppCard.js";

export default class AppResults extends React.Component {
  static propTypes = {
    friends: PropTypes.array
  };

  render() {
    return (
      <div className="component-app-results">
        {this.props.friends.map(friendData => (
          <AppCard data={friendData} />
        ))}
      </div>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";

export default class AppCard extends React.Component {
  static propTypes = {
    data: PropTypes.object
  };
  render() {
    return (
      <div>
        {this.props.data.name.first} {this.props.data.name.last}
      </div>
    );
  }
}

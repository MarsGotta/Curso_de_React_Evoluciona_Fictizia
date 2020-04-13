import React from "react";
import PropTypes from "prop-types";
export default class AppFilter extends React.Component {
  static propTypes = {
    textChange: PropTypes.func
  };
  handleChange = event => {
    this.props.textChange(event);
  };
  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

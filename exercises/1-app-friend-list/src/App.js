import React from "react";
import AppResults from "./components/AppResults.js";
import AppFilter from "./components/AppFilter.js";
import filterFriends from "./utils/filterFriends.js";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredFriends: filterFriends("", 20)
    };
  }
  handleSearchChange = event => {
    this.setState({
      filteredFriends: filterFriends(event.target.value, 20)
    });
  };

  render() {
    return (
      <div className="App">
        <AppFilter textChange={this.handleSearchChange} />
        <AppResults friends={this.state.filteredFriends} />
      </div>
    );
  }
}

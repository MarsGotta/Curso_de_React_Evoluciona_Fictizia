import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppResult from './components/AppResult/AppResult';
import AppSearch from './components/AppSearch/AppSearch';
import { friends } from './utils/friends';

class App extends Component {  
  constructor(props, context) {
    super(props, context);
    this.state = {
      result: this.filter(''),
    };
  }

  filter = (value) => {
    let result = friends.filter(friend => 
      (friend.name.first.toLowerCase().includes(value) 
      || friend.name.last.toLowerCase().includes(value)) ||
      (
        friend.name.first.includes(value)
        || friend.name.last.includes(value)
      )
      );
    return result;
  }

  handleSearch = (event) => {
    this.setState({result: this.filter(event.target.value)});
  }

  render() {
    const { result } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Buscador</h2>
        </div>
        <br/>
        <AppSearch handleSearch = {this.handleSearch}/>
        <AppResult data = {result}/>
      </div>
    );
  }
}

export default App;

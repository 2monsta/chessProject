import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

// this is my board
class App extends Component {
  render() {
		return(
			<Board/>
		)
  }
}

export default App;

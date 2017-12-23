import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Knight from './components/Knight';
import Blocks from './components/Blocks';
import PropTypes from 'prop-types';

// this my board
class App extends Component {
// 

  render() {
		const blocks = [];
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="darkYellow"/>)
			}else{
				blocks.push(<Blocks color="white"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="darkYellow"/>)
			}else{
				blocks.push(<Blocks color="white"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="darkYellow"/>)
			}else{
				blocks.push(<Blocks color="white"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="darkYellow"/>)
			}else{
				blocks.push(<Blocks color="white"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2==0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}
    return (
      <div className="App container">
				<div className="row">
					{blocks}
				</div>
      </div>
    );
  }
}

export default App;

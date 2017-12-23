import React, { Component } from 'react';

class Rook extends Component {
	constructor(){
		super();
		this.move = this.move.bind(this);
	}
	move(){
		console.log("this clicks");
		console.log(this.props.ownNumber)
	}
	render() {
		console.log(this.props.ownNumber);
		return (
			<div onClick={this.move}>
			<span>&#9814;</span>
			</div>
		);
	}
}

export default Rook;
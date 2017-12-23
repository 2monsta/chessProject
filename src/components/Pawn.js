import React, { Component } from 'react';

class Pawn extends Component {
	constructor(){
		super();
		this.move = this.move.bind(this);
	}
	move(){
		console.log("this clicks");
		console.log(this.props.ownNumber)
	}
	render() {

		return (
			<div onClick={this.move}>
				<span>&#9817;</span>
			</div>
		);
	}
}

export default Pawn;
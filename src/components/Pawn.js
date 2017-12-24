import React, { Component } from 'react';

class Pawn extends Component {
	constructor(){
		super();
		this.move = this.move.bind(this);
	}
	move(){
		console.log(this.props.ownNumber -16);
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
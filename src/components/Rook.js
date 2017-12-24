import React, { Component } from 'react';

class Rook extends Component {
	constructor(){
		super();
		this.move = this.move.bind(this);
	}
	move(){
		const blockNum = 8;
		console.log(this.props.ownNumber -blockNum);
		console.log(this.props.ownNumber-blockNum *2);
		console.log(this.props.ownNumber-blockNum *3);
		console.log(this.props.ownNumber-blockNum*4);
		console.log(this.props.ownNumber -blockNum*5);
		console.log(this.props.ownNumber -blockNum*6);
		console.log(this.props.ownNumber -blockNum*7);

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
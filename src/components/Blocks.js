import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Knight from './Knight';
import Pawn from './Pawn';
import Rook from './Rook';
import Bishop from './Bishop';
import King from './King';
import Queen from './Queen';


class Blocks extends Component {
	constructor(){
		super();
		this.state={}
	}
	render() {
		const color = this.props.color;
		var styles = {
			backgroundColor: 'white',
			width: '12%',
			height: '100px',
			display: 'inline-block'
		};
		if(color === 'darkYellow'){
			styles.backgroundColor= "#D28C4D"
		}else{
			styles.backgroundColor = 'whtie';
		}
		if(this.props.pieces==="pawn"){
			console.log(this.props.num);
			return(
				<div style={styles}>
					<Pawn ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="rook"){ 
			return(
				<div style={styles}>
					<Rook ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="knight"){ 
			return(
				<div style={styles}>
					<Knight ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="bishop"){ 
			return(
				<div style={styles}>
					<Bishop ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="king"){ 
			return(
				<div style={styles}>
					<King ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="queen"){ 
			return(
				<div style={styles}>
					<Queen ownNumber={this.props.num}/>
				</div>
			)
		}
		return (
			//give the div a color
			<div style={styles}>
			</div>
		);
	}
}

export default Blocks;
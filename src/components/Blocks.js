import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Knight from './Knight';
import Pawn from './Pawn';
import Rook from './Rook';
import Bishop from './Bishop';
import King from './King';
import Queen from './Queen';


class Blocks extends Component {



	render() {
		const color = this.props.color;
		var styles = "";
		if(color === 'darkYellow'){
			styles= "#D28C4D"
		}else{
			styles = 'whtie';
		}
		if(this.props.pieces==="pawn"){
			console.log(this.props.num);
			return(
				<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
					<Pawn ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="rook"){ 
			return(
				<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
					<Rook ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="knight"){ 
			return(
				<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
					<Knight ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="bishop"){ 
			return(
				<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
					<Bishop ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="king"){ 
			return(
				<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
					<King ownNumber={this.props.num}/>
				</div>
			)
		}
		else if(this.props.pieces ==="queen"){ 
			return(
				<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
					<Queen ownNumber={this.props.num}/>
				</div>
			)
		}
		return (
			//give the div a color
			<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
			</div>
		);
	}
}

export default Blocks;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Blocks extends Component {
	render() {
		const color = this.props.color;
		var styles = "";
		if(color === 'darkYellow'){
			styles= "#D28C4D"
		}else{
			styles = 'whtie';
		}

		return (
			//give the di a color
			<div style={{backgroundColor: styles, width:'12%', height:'100px', display:'inline-block'}}>
				{/* {this.props.children} */}
			</div>
		);
	}
}

export default Blocks;

// Blocks.propTypes={
// 	black: PropTypes.bool
// }
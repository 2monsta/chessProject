import React, { Component } from 'react';
import Blocks from './Blocks';



class Board extends Component {
	render() {
		const blocks = [];
		const pieces = [
			'pawn',
			'rook',
			'knight',
			'bishop',
			'king',
			'queen',
		]

		for(let i=0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="darkYellow"/>)
			}else{
				blocks.push(<Blocks color="white"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="darkYellow"/>)
			}else{
				blocks.push(<Blocks color="white"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="darkYellow"/>)
			}else{
				blocks.push(<Blocks color="white"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="darkYellow" pieces={pieces[0]}/>)
			}else{
				blocks.push(<Blocks color="white" pieces={pieces[0]}/>)
			}
		}
		for(let i =0; i<8; i++){
			if(i%2===0){
				blocks.push(<Blocks color="white"/>)
			}else{
				blocks.push(<Blocks color="darkYellow"/>)
			}
		}

		console.log(blocks);
		for(let i =0; i<blocks.length; i++){
			if(i===56){
				blocks[i] = (<Blocks color="white" pieces={pieces[1]}/>)
			}else if(i ===57){
				blocks[i] = (<Blocks color="darkYellow" pieces={pieces[2]}/>)
			}
			else if(i ===58){
				blocks[i] = (<Blocks color="white" pieces={pieces[3]}/>)
			}
			else if(i ===59){
				blocks[i] = (<Blocks color="darkYellow" pieces={pieces[4]}/>)
			}
			else if(i ===60){
				blocks[i] = (<Blocks color="white" pieces={pieces[5]}/>)
			}
			else if(i ===61){
				blocks[i] = (<Blocks color="darkYellow" pieces={pieces[3]}/>)
			}
			else if(i ===62){
				blocks[i] = (<Blocks color="white" pieces={pieces[2]}/>)
			}
			else if(i ===63){
				blocks[i] = (<Blocks color="darkYellow" pieces={pieces[1]}/>)
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

export default Board;
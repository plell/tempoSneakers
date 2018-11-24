import React, {Component} from 'react'
import GameTable from './gameTable'
import CardSelect from './cardSelect'
import {cardData} from '../data/cardData'
import Button from './ui/button';

const defaultState = { cards:cardData(), hand:null }

export default class GameWindow extends Component {
constructor(){
	super()
	this.state = defaultState
}

pickHand = (hand) => {
	this.setState({hand})
}

clearGame = () => {
	console.log('clear')
	this.setState(defaultState)
}

render(){
	const {cards, hand} = this.state
	console.log("GAME WINDOW",this.props)
	return(
		<div style={{height:'100vh'}}>
			{hand ?
				<div>
				<Button label="Back" action={()=>this.clearGame()}/>
				<GameTable hand={hand}/>
				</div>
				:
				<CardSelect {...this.props} pickHand={this.pickHand} 
				cards={cards}/>
			}
			
		</div>)
}

}




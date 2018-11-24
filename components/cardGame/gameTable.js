import React, {Component} from 'react'
import Card from './card'
import styled from 'styled-components'
import GameBoard from './gameBoard'

export default class GameTable extends Component {
	constructor(props){
		super(props)

		this.state={
		controlCard:null,
		hoverCard:null,
		hand:props.hand
		}
	}

	setControlCard = (card) => {
		const {controlCard} = this.state
		if (controlCard === card) card = null
		this.setState({controlCard: card})
	}

	setHoverCard = (card) => {
		const {hoverCard} = this.state
		if (hoverCard !== card) this.setState({hoverCard: card})
	}

	updateHand = (card) => {
		const hand = [...this.state.hand]
		const usedCardIndex = hand.findIndex(f=>f.name===card.name)
		const newHand = hand.splice(usedCardIndex,1)
		this.setState({hand,controlCard:null})
	}

	editControlCard = (powerup) => {
		let controlCard = {...this.state.controlCard}

		controlCard.pocket -= powerup.price
		controlCard.u += powerup.effect
		controlCard.r += powerup.effect
		controlCard.l += powerup.effect
		controlCard.d += powerup.effect

		controlCard.powups = controlCard.powups.map((p,ii)=>{
			if (p.id === powerup.id) {
				p = { ...p, active: true }
				}
				return p
			})

		this.setState({controlCard})
	}


render(){
	const {controlCard,hoverCard,hand} = this.state

	const myHand = hand.map((o,i)=>{
		const selected = controlCard && controlCard.name === o.name
				return(
				<Card key={i} card={o} setHoverCard={this.setHoverCard} selected={selected} 
				index={i} inGame={true} setControlCard={this.setControlCard}/>
					)
				})

	return(
		<Envelope>
			<GameBoard controlCard={controlCard} 
			hand={hand} 
			editControlCard={this.editControlCard}
			hoverCard={hoverCard}
			updateHand={this.updateHand}
			/>
			<Hand>
				{myHand}
			</Hand>
		</Envelope>)
}

}

const Envelope = styled.div`
width:100%;
`
const Hand = styled.div`

`
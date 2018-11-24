import React, {Component} from 'react'
import Card from './card'
import styled from 'styled-components'
import Button from './ui/button'

export default class CardSelect extends Component {

state={
	selected:[]
}

toggleCard = (card) => {
	const selected = this.state.selected
	const exists = selected.findIndex(f=>f.name===card.name)
	if (exists !== -1) {
		selected.splice(exists, 1)
	}
	else {
		// if (selected.length > 5) {
		// 	console.log('dont allow')
		// 	return
		// }
		selected.push(card)
	}

	this.setState({selected})
}


render(){
	const {selected} = this.state
	const {cards, pickHand} = this.props
	const allCards = cards && cards.map((o,i)=>{
				const picked = selected.find(f=>f.name===o.name)
				return(
				<Card key={i} card={o} toggleCard={this.toggleCard}
					selected={picked} index={i} inGame={false}/>
					)
				})
	return(
		<Envelope>
			<div>
			<span>Hand: {selected.length}/5</span>
			</div>
			<Frame>
			{allCards}
			</Frame>
			
			<Bottom>
				<Button label="Start" action={()=>pickHand(selected)}/>
			</Bottom>
		</Envelope>)
}

}

const Envelope = styled.div`
display:flex;
flex-direction:column;
padding:50px;
height:100%;
align-items: center;
`

const Frame = styled.div`
display:flex;
width:50%;
box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); 
padding:20px;
border:4px dotted #333;
background: #d6d6d6;
flex-flow: row wrap;
`
const Bottom = styled.div`
margin:30px;
text-align:center;
`
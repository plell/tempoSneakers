import React, {Component} from 'react'
import styled from 'styled-components'
import CardSlot from './cardSlot'
import CommandLine from './commandLine'

export default class GameBoard extends Component {
	constructor(){
		super()
		this.state={
		slots:null

		}
	}

	componentWillMount(){
	const slots = []

	for (let h=0;h<3;h++){
		slots.push([])
		for (let i=0;i<4;i++){
			slots[h].push({
				row:h,
				column:i,
				card:null
			})
		}	
	}
	this.setState({slots})
	}

	turnPoss = (poss) => {
		return (1 - poss)
	}

	flipCard = (ind,index,card) => {
		const slots = [...this.state.slots]

		//flip possession between 1 and 
		slots[ind][index].card.poss = this.turnPoss(card.poss)

		const row = ind
		const column = index

		//ripple
		slots.map((r,i)=>{
			r.map((c,ii)=>{
				if (!c.card) return
				if (c.card.poss === card.poss) return
			//check left and right
				if (i===row){
					if (ii===column-1){
						if (card.l > c.card.r) slots[i][ii].card.poss = this.turnPoss(c.card.poss)
					}
					if (ii===column+1){
						if (card.r > c.card.l) slots[i][ii].card.poss = this.turnPoss(c.card.poss)
					}
				}
			//check top and bottom
				if (ii===column){
					if (i===row-1){
						if (card.u > c.card.d) slots[i][ii].card.poss = this.turnPoss(c.card.poss)
					}
					if (i===row+1){
						if (card.d > c.card.u) slots[i][ii].card.poss = this.turnPoss(c.card.poss)
					}
				}
			})
		})

		this.setState({slots})
	}

	updateBoard = (slots, row, column, card) => {
		slots.map((r,i)=>{
			r.map((c,ii)=>{
				if (!c.card) return
				if (c.card.poss === card.poss) return
			//check left and right
				if (i===row){
					if (ii===column-1){
						if (card.l > c.card.r) this.flipCard(i,ii,c.card)
					}
					if (ii===column+1){
						if (card.r > c.card.l) this.flipCard(i,ii,c.card)
					}
				}
			//check top and bottom
				if (ii===column){
					if (i===row-1){
						if (card.u > c.card.d) this.flipCard(i,ii,c.card)
					}
					if (i===row+1){
						if (card.d > c.card.u) this.flipCard(i,ii,c.card)
					}
				}
			})
		})
	}

	updateSlots = (row,column,card) => {
		if (card) return

		const {slots} = this.state
		const {controlCard,updateHand} = this.props

		if (!controlCard) return
		this.updateBoard(slots, row, column, controlCard)

		slots[row][column] = {
						...slots[row][column],
						card: {...controlCard}
						}

		updateHand(controlCard)
		this.setState({slots})
	}

render(){
	const {controlCard, hoverCard, updateHand, editControlCard} = this.props
	const {slots} = this.state

	const gameBoard = slots && slots.map((o,i)=>{
			return o.map((card,ind)=>{
				return <CardSlot key={Math.random(0,20000)} 
				row={card.row} 
				updateSlots={this.updateSlots}
				controlCard={controlCard}
				column={card.column} 
				card={card.card} />
			})		
		})


	return(
		<div style={{display:'flex',flexDirection: 'row', 
		justifyContent: 'center',
		flexWrap:'nowrap'}}> 
		<Board>
		{gameBoard}
		</Board>
		<CommandLine 
		editControlCard={editControlCard}
		controlCard={controlCard}
		hoverCard={hoverCard}/>
		</div>)
}

}

const Board = styled.div`
margin:30px;
width:380px;
height:330px;
background:url(/static/img/timber.jpg/);
background-size:cover;
border:1px solid #666;
border-radius:4px;
`
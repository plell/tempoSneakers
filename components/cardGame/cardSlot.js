/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import styled from 'styled-components'
import PlayedCard from './playedCard'

export default class CardSlot extends Component {

	render(){
		const {column,row,card,controlCard,updateSlots} = this.props 
		return(
			<Edge row={row} controlCard={controlCard} card={card} column={column} onClick={()=>updateSlots(row,column,card)}>
				{card ?
					<PlayedCard card={card}/> : null
				}
			</Edge>
		)
	}
}

const Edge = styled.div`
display:inline-block;
justify-content:center;
position:relative;
width:70px;
maxWidth:70px;
height:95px;
margin:5px;
border-radius:4px;
border: 1px solid #303030;
transition: all 0.15s;
&:hover{
	z-index:80px;
	transform:${(p)=>!p.card?'scale(1.18)':null};
	background:${(p) => p.controlCard ? 'url(/static/img/'+ p.controlCard.img + '/)' : null};
	opacity:${(p)=>!p.card?0.4:null};
	background-size:cover;
	background-repeat: no-repeat;
};
`
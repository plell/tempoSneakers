import React, {Component} from 'react'
import styled from 'styled-components'
import Console from './console'

export default class CommandLine extends Component {
	constructor(props){
		super(props)
	}

render(){
	const {hoverCard, controlCard, editControlCard} = this.props

	return(
		<Command>
		CONSOLE
		{controlCard ? 
			<Console editControlCard={editControlCard} controlCard={controlCard}/> :
		hoverCard ? 
			<Console controlCard={hoverCard}/>:
		null}
		</Command>)
	}
}

const Command = styled.div`
margin:30px;
width:380px;
height:330px;
cursor:default;
background:#222;
border-radius:4px;
color:#f4f4f4;
`
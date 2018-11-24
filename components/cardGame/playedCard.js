import React, {Component} from 'react'
import styled from 'styled-components'

export default class PlayedCard extends Component {
constructor(props){
	super(props)
}

componentWillReceiveProps(){
	console.log("update")
}

shouldComponentUpdate(nextProps, nextState){
	console.log("shouldupdate",nextProps)
}

render(){
	const {unplayed,inGame,card,index,toggleCard,setControlCard,selected} = this.props
	return(
		<Portrait card={card}>
			<Stats>
				<Up>{card.u}</Up>
				<Down>{card.d}</Down>
				<Left>{card.l}</Left>
				<Right>{card.r}</Right>
			</Stats>
		</Portrait>)
}

}

const Portrait = styled.div`
position:absolute;
margin:auto;
background:${(p)=>p.card ? 'url(/static/img/'+ p.card.img + '/)' : null};
background-size:cover;
border: ${(p)=>p.card && p.card.poss === 1 ? '4px solid blue' : p.card && p.card.poss === 0 ? '4px solid orange' : null}
border-radius:4px;
width:89%;
height:89%;
`
const Stats = styled.div`
	position:relative;
	margin:3px;
	background:#ffffffd1;
	user-select:none;
    overflow: hidden;
    height: 40px;
    width:30px;
`
const Up = styled.div`
	position:absolute;
	top:0;
	left:36%;
`
const Down = styled.div`
	position:absolute;
	bottom:0;
	left:36%;
`
const Left = styled.div`
	position:absolute;
	top:30%;
	left:0;
`
const Right = styled.div`
	position:absolute;
	top:30%;
	right:0;
`
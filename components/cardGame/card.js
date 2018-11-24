import React, {Component} from 'react'
import styled from 'styled-components'

export default class Card extends Component {

render(){
	const {inGame,card,setHoverCard,index,toggleCard,setControlCard,selected} = this.props
	return(
		<Edge onMouseOver={()=>inGame ? setHoverCard(card) : null} 
		onMouseOut={()=>inGame ? setHoverCard(null) : null} 
		onClick={()=>inGame ? setControlCard(card) : toggleCard(card)} 
		selected={selected} card={card} index={index} inGame={inGame}>
			<Stats poss={card.poss}>
				<Up>{card.u}</Up>
				<Down>{card.d}</Down>
				<Left>{card.l}</Left>
				<Right>{card.r}</Right>
			</Stats>
		</Edge>)
}

}

const Stats = styled.div`
	position:relative;
	border: ${(p)=>p.poss < 1 ? '1px solid orange' : '1px solid blue'};
	margin:3px;
	z-index:20;
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

const Edge = styled.div`
display:inline-block;
position:relative;
width:${(p)=>p.inGame ? '120px' :'60px'};
height:${(p)=>p.inGame ? '160px' :'80px'};
margin: ${(p)=>p.inGame ? '0px -15px 0px -15px' : '10px 5px 10px 5px' };
border:1px solid #444;
border-radius:4px;
z-index: ${(p)=> p.selected ? 200 : null};
transition: all 0.15s;
opacity: ${(p)=>p.selected ? '0.9' : '1' };
transform: ${(p)=>p.inGame ? `rotate(${p.index < 3 ? -20 + p.index*5 : p.index*5}deg)` : null};
&:hover{
	z-index: 100;
	opacity: ${(p)=>p.inGame && p.selected ? null:'1'};
	transform: ${(p)=>p.inGame && !p.selected ? 'translateY(-30px)' : !p.inGame ? 'scale(1.18)' : null};
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); 
};
background:${(p)=>p.card ? 'url(/static/images/'+ p.card.img + '/)' : null};
background-size:cover;
background-repeat: no-repeat;
box-shadow: ${(p)=>p.inGame && p.selected ? '0 15px 20px rgba(0, 0, 0, 0.3)':null}; 
filter: ${(p)=>!p.inGame && p.selected ?  'opacity(50%) blur(0.1px) contrast(160%)' : 
			p.inGame && p.selected ? null : null};
transform: ${(p)=>p.inGame && p.selected ? 'translateY(-35px)' : null};
`
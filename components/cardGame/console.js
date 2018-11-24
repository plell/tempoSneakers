import React, {Component} from 'react'
import styled from 'styled-components'
import { Button } from "antd";

export default class CommandLine extends Component {

render(){
	const {controlCard,editControlCard} = this.props

	const buttons = []
	const buffs = []

	controlCard && controlCard.powups && controlCard.powups.map((o,i)=>{
		const disable = (o.active === true || controlCard.pocket < o.price) 
		buttons.push(<Button key={i} style={{margin:5}} disabled={disable} onClick={()=>editControlCard(o)}>{o.name} <Price>{o.price}</Price></Button>)
	
		if (o.active) buffs.push(<BuffIcon key={i} img={o.img}/>)
		
	})

	return(
		<Details>
		<Image image={controlCard.img}/>
		<Pocket>
		{controlCard.pocket} Gob
		</Pocket>
		<Bar>
		{buttons}
		</Bar>
		<Buffs>
		{buffs}
		</Buffs>
		</Details>)
	}
}


const Buffs = styled.div`
color:#f4f4f4;
`
const BuffIcon = styled.div`
display:inline-block;
margin:5px;
background:${p=>p.img ? 'url(/static/images/pow/' + p.img + '/)' : null};
width:30px;
height:30px;
background-size:cover;
background-repeat: no-repeat;
`
const Details = styled.div`
position:relative;
background:#000;
padding:10px;
border-radius:4px;
color:#f4f4f4;
height:calc(100% - 60px);
`
const Image = styled.div`
width:200px;
height:200px;
opacity:0.4;
background:${(p)=> p.image ? 'url(/static/images/' + p.image + '/)' : null};
background-size:cover;
background-repeat: no-repeat;
`
const Pocket = styled.div`
position:absolute;
left:10px;
bottom:10px;
text-align:center;
border:1px solid #f6f6f6;
padding:10px;
width:fit-content;
height:40px;
`
const Price = styled.div`
display:inline-block;
padding:2px;
font-weight:bold;
width:fit-content;
`
const Buon = styled.div`
display:block;
margin:5px;
border:1px solid #fff;
color:#eee;
width:100%;
padding:10px;
&:hover{
	color: #63de00;
	border:1px solid #63de00;
}
`
const Bar = styled.div`
position:absolute;
display:flex;
flex-direction:column;
z-index:10;
right:59px;
top:6px;
color:#eee;
`
import React, {Component} from 'react'
import styled from 'styled-components'

export default class Button extends Component {

render(){
	const {label,action} = this.props 
	return(
		<B onClick={()=>action()}>
		{label}
		</B>
		)
}
}

const B = styled.div`
display:inline-block;
font-size:28px;
text-align:center;
background:#222;
color:#eee;
position:relative;
width:100px;
height:38px;
margin:5px;
border-radius:4px;
border: 2px solid #555;
transition: all 0.15s;
&:hover{
	transform:scale(1.18);
};
`
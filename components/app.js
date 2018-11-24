import React, {Component} from 'react'
import GameWindow from './cardGame/gameWindow'

export default class App extends Component {

render(){
	return(
		<div style={{height:'100vh', 
		width:'100vw',
		background:'#d1d1d1',
		textAlign:'center',
		justifyContents:'center'}}>
		<GameWindow {...this.props} />
		</div>)
}

}

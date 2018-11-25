import React, {Component} from 'react'
import GameWindow from './cardGame/gameWindow'
import {subscribeToTimer} from '../redux/actions/api'

export default class App extends Component {

	constructor(){
		super()
		this.state = {
			timestamp:'nothing'
		}

		// subscribeToTimer((err, timestamp) => this.setState({ timestamp }))
	}

render(){
	console.log(this.state.timestamp)
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

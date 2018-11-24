import React, {Component} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {store} from '../redux/store'
import App from '../components/app'
import {Provider} from "react-redux";
// import css from 'antd/dist/antd.min.css'

export default class extends Component {
  render(){
    return(
    	<Provider store={store}>
	  	<App {...this.props}/>
    	</Provider>)
  }
}

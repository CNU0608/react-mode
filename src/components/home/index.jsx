require('./index.css')
import React from 'react'

import Header from '../header'

export default class Home extends React.Component{
	render(){
		return (
			<div className="home">
				<Header/>
			</div>
		)
	}
}


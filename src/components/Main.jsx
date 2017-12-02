require('normalize.css/normalize.css')
require('antd/dist/antd.css')
require('styles/App.css')
require('font-awesome-webpack')
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home'
import Login from './login'
import Register from './register'
import About from './about'
import Error from './404'

export default class Main extends React.Component{
	render(){
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/login" component={Login}/>
						<Route path="/register" component={Register}/>
						<Route path="/about" component={About}/>
						<Route component={Error}/>
					</Switch>
				</div>
			</Router>

		)
	}
}


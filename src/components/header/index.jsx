require('./index.less')
import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'

export default class Header extends React.Component{
	state = { visible: false }
	constructor(){
		super()
	}
	showModal = () => {
		this.setState({
			visible: true,
		})
	}
	handleOk = () => {
		this.setState({
			visible: false,
		});
	}
	handleCancel = () => {
		this.setState({
			visible: false,
		});
	}
	render(){
		return (
			<div>
				<div className="header">
					<div className="clearfix">
						<div className="logo left">
							Logo
						</div>
						<div className="menu right" onClick={this.showModal}>
							<i className={this.state.visible? 'fa fa-times':'fa fa-bars'}></i>
						</div>
					</div>
				</div>
				<Modal
					closable={false}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					footer={null}
				>
					<div className="menuModal">
						<ul className="menuList">
							<li><Link to="/login">登录</Link></li>
							<li><Link to="/register">注册</Link></li>
							<li><Link to="/about">关于我们</Link></li>
						</ul>
					</div>
				</Modal>
			</div>
		)
	}
}
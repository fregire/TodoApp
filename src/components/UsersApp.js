import React from 'react';
import users from '../users';
import UsersList from './UsersList';
import 'bootstrap/dist/css/bootstrap.css';

class UsersApp extends React.Component{
	state = {
		reverted: false
	}

	revert = () => {
		this.setState({
			reverted: !this.state.reverted
		});
	}

	render(){
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>Users List</h1>
					<button className="btn btn-primary" onClick={this.revert}>Revert List</button>
				</div>
				<div className="">
					<UsersList users={this.state.reverted ? users.reverse() : users} />
				</div>
			</div>
		);		
	}
}

export default UsersApp;
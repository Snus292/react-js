import React, { Component } from 'react'
import Users from '../components/Users';
import AddUser from '../components/AddUser';
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users?page=1";

export class UserM extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};

		axios.get(baseUrl).then((res) => {
			this.setState({ users: res.data.data });
		});

		this.addUser = this.addUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.editUser = this.editUser.bind(this);
	}

	addUser(user) {
		const id = this.state.users.length + 1;
		this.setState({
			users: [...this.state.users, { id, ...user }],
		});
	}

	deleteUser(id) {
		this.setState({
			users: this.state.users.filter((el) => el.id !== id),
		});
	}

	editUser(user) {
		let allUsers = this.state.users;
		allUsers[user.id - 1] = user;

		this.setState({ users: [] }, () => {
			this.setState({ users: [...allUsers] });
		});
	}

	render() {
		return (
			<><aside>
				<AddUser onAdd={this.addUser} />

			</aside>
				<main>

					<Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser} />
				</main></>

		)
	}
}

export default UserM

import React from 'react';
import User from '../User';
import './index.css'

function UsersList({users}){
	var usersList = users.map((user, index) => 
		<User defaultOpen={index === 0} key={user.id} user={user} />
	);

	return (
		<ul className="users-list">
			{usersList}
		</ul>
	);
}


export default UsersList;
import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props){
	let items = [];

	for(let i = 0; i < props.items.length; i++){
		if(props.items[i].content){
			items.push(<TodoItem 
						onDeleteClick={props.onDeleteClick} 
						index={i} 
						key={ props.items[i].id } 
						items={props.items}
					  />
			);	
		}
	}
	return (
		<ul className="todo-list">	
			{items}
		</ul>
	)
}

export default TodoList;
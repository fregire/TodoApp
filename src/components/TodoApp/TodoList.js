import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props){
	return (
		<ul className="todo-list">	
			{
				props.items.map(function(item, i){ 
					return item.content && <TodoItem onDeleteClick={props.onDeleteClick} key={item.id} index={i} items={ props.items } />
				})
			}
		</ul>
	)
}

export default TodoList;
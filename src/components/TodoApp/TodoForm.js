import React from 'react';


function TodoForm(props){
	return (
		<form className="todo-form form-inline" action="post">
			<input className="form-control mr-sm-2" />
			<button 
				className="btn btn-outline-success" 
				onClick={props.onAddClick}
			>
				Добавить задачу
			</button>
			<button 
				className="btn btn-warning" 
				onClick={props.onClearCompletedItems}
			>
				Очистить выполненные задачи
			</button>
		</form>
	);
}

export default TodoForm;
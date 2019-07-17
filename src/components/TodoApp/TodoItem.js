import React from 'react';


class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			completed: this.props.items[this.props.index].completed
		}
	}

	handleCompletedClick = (e) => {
		let items = this.props.items;
		//Необходимо не тольо имзенить состояние у самого компонента, но
		//и внести изменения в общий массив задач, чтобы при перезагрузке это 
		//состояние осталось
		items[this.props.index].completed = !this.state.completed;

		this.setState({
			completed: !this.state.completed
		});
		
		localStorage.setItem("items", JSON.stringify(items));
	}

	render(){
		const completedBtnClasses = this.state.completed ? 'btn btn-success disabled mr-2' : 'btn btn-success mr-sm-2';
		const completedCardClasses = this.state.completed ? 'todo-item card card--completed' : 'todo-item card';
		const item = this.props.items[this.props.index];
		const index = this.props.index;

		return (
			<li className={completedCardClasses} style={{"marginBottom" : "15px"}}>
				<h2 className="card-header">
					<span className="todo-item__index">Задача №{index + 1}</span>
					<div className="card-controls float-right">
						<button 
							className={completedBtnClasses}  
							onClick={this.handleCompletedClick}
							aria-disabled={this.state.completed && "true"}
						>
							Выполнена
						</button>
						<button className="btn btn-danger" onClick={this.props.onDeleteClick} data-index={index}>Удалить</button>
					</div>
					<span className="text-muted todo-date">{item.date}</span>
				</h2>
				<p className="card-body">{item.content}</p>
			</li>
		);		
	}
}

export default TodoItem;
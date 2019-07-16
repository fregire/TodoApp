import React from 'react';


class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			completed: this.props.item.completed
		}
	}

	handleCompletedClick = (e) => {
		let items = this.props.items;
		items[this.props.index].completed = !this.state.completed;
		this.setState({
			completed: !this.state.completed
		});
		
		localStorage.setItem("items", JSON.stringify(items));
	}

	render(){
		const completedBtnClasses = this.state.completed ? 'btn btn-success disabled mr-2' : 'btn btn-success mr-sm-2';
		const completedCardClasses = this.state.completed ? 'todo-item card card--completed' : 'todo-item card';

		return (
			<li className={completedCardClasses} style={{"marginBottom" : "15px"}}>
				<h2 className="card-header">
					<span className="todo-item__index">Задача №{this.props.index + 1}</span>
					<div className="card-controls float-right">
						<button 
							className={completedBtnClasses}  
							onClick={this.handleCompletedClick}
							aria-disabled={this.state.completed ? "true" : "false"}
						>
							Выполнена
						</button>
						<button className="btn btn-danger" onClick={this.props.onDeleteClick} data-index={this.props.index}>Удалить</button>
					</div>
					<span className="text-muted todo-date">{this.props.item.date}</span>
				</h2>
				<p className="card-body">{this.props.item.content}</p>
			</li>
		);		
	}
}

export default TodoItem;
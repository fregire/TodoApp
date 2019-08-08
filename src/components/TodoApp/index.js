import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

//Вспомогательные функции
import { saveUserTasks, getUserTasks } from './util';



class TodoApp extends React.Component {
	constructor(props){
		super(props);

		let items = getUserTasks() || [];
		let currentIndex = items.length;

		this.state = {
			items: items,
			currentIndex: currentIndex
		}
	}

	handleAddClick = (e) => {
		e.preventDefault();

		const input = document.querySelector(".form-control");
		const inputValue = input.value;
		let items = this.state.items;
		let date = new Date();

		if(!inputValue) return;	

		//Добавляем задачу со всеми свойствами
		items[this.state.currentIndex] = {
			content: inputValue,
			date: date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
			id: parseInt(Math.random() * (100 - 1) + 1), // Id взял просто так. Может повториться,
			completed: false
		};

		this.setState({
			items: items,
			currentIndex: this.state.currentIndex + 1
		});

		saveUserTasks(items);

		input.value = "";
	}

	handleDeleteClick = (e) => {
		e.preventDefault();

		let items = this.state.items;
		let index = +e.target.getAttribute("data-index");

		//Удаляем задачу из массива
		items.splice(index, 1);

		this.setState({
			items: items,
			currentIndex: this.state.currentIndex - 1
		});

		saveUserTasks(items);
	}

	handleClearCompletedTasksClick = (e) => {
		e.preventDefault();

		//Оставляем только те задачи, которые не выполнены
		//остальное отбрасываем
		let items = this.state.items.filter(function(item){
			return !item.completed;
		});

		this.setState({
			items: items,
			currentIndex: items.length
		});


		saveUserTasks(items);
	}

	render(){
		return (
			<div>
				<header className="header jumbotron">
					<h1 className="container" >TodoApp</h1>
				</header>
				<main className="body container">
					<TodoForm onAddClick={this.handleAddClick} onClearCompletedItems={this.handleClearCompletedTasksClick} />
					<TodoList onDeleteClick={this.handleDeleteClick} items={this.state.items} />
				</main>
			</div>
		);
	}
}



export default TodoApp;
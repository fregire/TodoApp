import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import TodoList from './TodoList';
import TodoForm from './TodoForm';


class TodoApp extends React.Component {
	constructor(props){
		super(props);

		let items = JSON.parse(localStorage.getItem("items")) || [];
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

		items[this.state.currentIndex] = {
			content: inputValue,
			date: date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
			id: Math.random() * (100 - 1) + 1, // Id взял просто так. Может повториться,
			completed: false
		};

		this.setState({
			items: items,
			currentIndex: this.state.currentIndex + 1
		});

		localStorage.setItem("items", JSON.stringify(items));
		input.value = "";
	}

	handleDeleteClick = (e) => {
		let items = this.state.items;
		let index = +e.target.getAttribute("data-index");

		items.splice(index, 1);

		this.setState({
			items: items,
			currentIndex: this.state.currentIndex - 1
		});

		localStorage.setItem("items", JSON.stringify(items));
	}

	handleClearCompletedItemsClick = (e) => {
		e.preventDefault();

		let items = this.state.items.filter(function(item){
			return !item.completed;
		});

		this.setState({
			items: items,
			currentIndex: items.length
		});


		localStorage.setItem("items", JSON.stringify(items));
	}

	render(){
		return (
			<div>
				<header className="header jumbotron">
					<h1 className="container" >TodoApp</h1>
				</header>
				<main className="body container">
					<TodoForm handleAddClick={this.handleAddClick} onClearCompletedItems={this.handleClearCompletedItemsClick} />
					<TodoList handleDeleteClick={this.handleDeleteClick} items={this.state.items} />
				</main>
			</div>
		);
	}
}



export default TodoApp;
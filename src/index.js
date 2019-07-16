import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TodoApp from './components/TodoApp';
import UsersApp from './components/UsersApp';

ReactDOM.render(<TodoApp />, document.querySelector("#root"));

// const images = [
// 	'img/1.jpg',
// ]


// class Cell extends React.Component {

// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			draggedItem: null
// 		}
// 	}

// 	onDragEnter(ev){
// 		ev.target.classList.add("list__item--hover");
// 	}

// 	onDragLeave(ev){
// 		ev.target.classList.remove("list__item--hover");
// 	}

// 	render(){
// 		return (
// 			<li onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave} className="list__item" dropzone="true">{this.props.innerItem}</li>
// 		);		
// 	}
// }



// class App extends React.Component {
// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			amount: props.cellAmount,
// 			innerItems: images,
// 			draggedItem: null
// 		}

// 		this.onDragStart = this.onDragStart.bind(this);
// 		this.onDragDrop = this.onDragDrop.bind(this);
// 	}

// 	onDragStart(ev){
// 		ev.dataTransfer.setData('image/jpeg', ev.target.id);
// 		this.setState({draggedItem: ev.target});
// 	}

// 	onDragDrop(ev){
// 		ev.preventDefault();
// 		ev.target.classList.remove("list__item--hover");
// 		ev.target.appendChild(this.state.draggedItem);
// 	}

// 	onDragOver(ev){
// 		ev.preventDefault();
// 		return false;
// 	}

// 	render(){
// 		return (
// 			<ul onDragStart={this.onDragStart} onDrop={this.onDragDrop} onDragOver={this.onDragOver} className="list">
// 				<Cell innerItem={<img draggable="true" src="/img/1.jpg" id={1}/>} />
// 				<Cell />
// 				<Cell />
// 			</ul>
// 		);
// 	}
// }
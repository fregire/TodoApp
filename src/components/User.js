import React from 'react';


class User extends React.PureComponent {
	constructor(props){
		super(props);

		this.state = {
			isOpen: props.defaultOpen
		}
	}
	handleClick = () => {
		this.setState({ isOpen: !this.state.isOpen });

	}

	componentWillReceiveProps(nextProps){
		//console.log("Component will receive");
		if(nextProps.defaultOpen !== this.state.isOpen){
			this.setState({
				isOpen: nextProps.defaultOpen
			})
		}
	}

	componentWillUpdate(){
		console.log("will update");
	}

	componentDidUpdate(){
		//console.log("Закончилось обновление компонента");
	}

	render(){
		const {user} = this.props;
		const name = this.state.isOpen ? user.name : "Скрыто";
		const textBtn = this.state.isOpen ? "Скрыть имя" : "Показать имя";
		return (
			<li className="card users-list__item">
				<div className="card-header">
					<h2 className="float-left" style={{color: "red"}}>{name}</h2>
					<button className="btn btn-danger float-right">Удалить</button>
				</div>
				<div className="card-body">
					<p>{user.age}</p>
					<button className="btn btn-primary btn-lg" onClick={this.handleClick}>{textBtn}</button>
				</div>
			</li>
		);
	}
}

export default User
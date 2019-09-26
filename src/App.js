import React from 'react';
import { connect } from 'react-redux';
import { addCounter, subtractCounter, clearCounter } from './store';
import './App.css';

class App extends React.Component {
	handleClick() {
		const { dispatch } = this.props;
		dispatch(addCounter());
	}
	minusClick() {
		const { dispatch } = this.props;
		dispatch(subtractCounter());
	}
	clearCounter() {
		const { dispatch } = this.props;
		dispatch(clearCounter());
	}

	render() {
		return (
			<div className='App'>
				<p>Hola CourseIt - </p>
				<p>Counter : {this.props.counter}</p>
				<p>Nombre: {this.props.test}</p>
				<button onClick={() => this.handleClick()}>Sumar</button>
				<button onClick={() => this.clearCounter()}>Limpiar</button>
				<button onClick={() => this.minusClick()}>Restar</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter,
		test: state.name
	};
}
export default connect(mapStateToProps)(App);

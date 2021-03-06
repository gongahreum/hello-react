import React, { Component } from 'react';

const Problematic = () => {
	throw new Error('버그 출현!');
	return <div></div>;
};

class Counter extends Component {
	state = {
		number: 0,
		error: false,
	};

	constructor(props) {
		super(props);
		console.log('constructor');
	}

	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		// 5의 배수라면 리렌더링 하지 않음
		console.log('shouldComponentUpdate ', nextState);
		if (nextState.number % 5 === 0) return false;
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate');
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}
	componentDidCatch(error, info) {
		this.setState({
			error: true,
		});
	}

	handleIncrease = () => {
		this.setState((state) => ({
			number: state.number + 1,
		}));
	};
	handleDecrease = () => {
		const { number } = this.state;
		this.setState({
			number: number - 1,
		});
	};

	render() {
		if (this.state.error) return <h1>에러발생!</h1>;
		return (
			<div>
				<h1>카운터</h1>
				<div>값: {this.state.number}</div>
				{this.state.number === 4 && <Problematic />}
				<button onClick={this.handleIncrease}>+</button>
				<button onClick={this.handleDecrease}>-</button>
			</div>
		);
	}
}

export default Counter;

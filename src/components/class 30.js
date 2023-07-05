import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
             text: "World!",
             favColor:"red"
             };
	}

	componentWillMount() {
		console.log("componentWillMount()");
	}

	componentDidMount() {
		console.log("componentDidMount()");
	}

	changeState() {
		this.setState({ text: "Everyone!!", favColor:"pink" });
	}

	render() {
		return (
			<div>
				<h1>Hello {this.state.text}</h1>
                <h2>My favorite color is {this.state.favColor}</h2>
				<h2>
					<a onClick={this.changeState.bind(this)}>Press Here!</a>
				</h2>
			</div>);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate()");
		return true;
	}

	componentWillUpdate() {
		console.log("componentWillUpdate()");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate()");
	}
}

export default Test;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

	render(){
		return (
			<div>
				Hello React!
			</div>
		)
	}
}
//02:13:55
ReactDOM.render(<App/>, document.getElementById('root'));

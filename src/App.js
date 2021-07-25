/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import context from './core/context';
import DisplayString from './components/displayString';
import Input from './components/input';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div className="score"> SCORE { context.state.score }</div>
			{ DisplayString() }
			{ Input() }
			<div className="text">{ context.state.input }</div>
			<div className="type">{ context.state.usrTyped }</div>
			<div className="to-type">{ context.state.toType }</div>
		</div>
	);
};

export default App;

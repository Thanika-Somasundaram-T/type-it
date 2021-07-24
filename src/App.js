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
			<div> SCORE { context.state.score }</div>
			{ Input() }
			{ DisplayString() }
			<div className="text">{ context.state.input }</div>
		</div>
	);
};

export default App;

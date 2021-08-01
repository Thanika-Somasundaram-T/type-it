import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import context from './core/context';
import DisplayString from './components/displayString';
import Input from './components/input';
import Update from './components/update';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div className="score"> SCORE { context.state.score }</div>
			{ DisplayString() }
			{ Input() }
			{ Update() }
			<div className="text">{ context.state.answer }</div>
		</div>
	);
};

export default App;

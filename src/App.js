/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import context from './core/context';
import DisplayString from './components/displayString';
import Input from './components/input';
import TrueFalse from './components/tureOrNot';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div className="score"> SCORE { context.state.score }</div>
			{ TrueFalse() }
			{ DisplayString() }
			{ Input() }
			<div className="text">{ context.state.input }</div>
			<div
				className="to-type"
				style={ context.state.toType !== ''
					? { minWidth: '10%' }
					: { } }
			>{ context.state.toType }</div>
		</div>
	);
};

export default App;

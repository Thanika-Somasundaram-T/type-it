import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import DisplayString from './components/displayString';
import Input from './components/input';
import Update from './components/update';
import CheckLife from './components/checkLife';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ DisplayString() }
			{ Input() }
			{ Update() }
			{ CheckLife() }
		</div>
	);
};

export default App;

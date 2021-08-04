import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import Game from './components/game';
import Input from './components/input';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ Game() }
			{ Input() }
		</div>
	);
};

export default App;

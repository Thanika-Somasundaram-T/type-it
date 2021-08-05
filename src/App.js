import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import Game from './components/game';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ Game() }
		</div>
	);
};

export default App;

import { React, useEffect } from 'react';
import './App.scss';
import SampleService from './services/sample';
import Game from './components/game';
import Ticker from './components/ticker';

const App = () => {
	useEffect(SampleService.sayHai, []);
	useEffect(Ticker.start, []);

	return (
		<div className="App">
			{ Game() }
		</div>
	);
};

export default App;

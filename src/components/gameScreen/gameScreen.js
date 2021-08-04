import React from 'react';
import Indicator from './indicator/indicator';
// import Answer from './answer';
import Question from './question';
import UpcomingChar from './upcomingChar';
import Score from './score';
import Life from './life';

const GameScreen = () =>
	<div>
		{ Score() }
		{ Life() }
		{ Question() }
		{ UpcomingChar() }
		{ Indicator() }
	</div>;

export default GameScreen;

import React from 'react';
import Indicator from './indicator/indicator';
import Answer from './answer';
import Question from './question';
import UpcomingChar from './upcomingChar';
import Score from './score';
import Life from './life';
import Input from './input';

const GameScreen = () =>
	<div>
		{ Score() }
		{ Life() }
		{ Input() }
		{ Question() }
		{ Answer() }
		{ UpcomingChar() }
		{ Indicator() }
	</div>;

export default GameScreen;

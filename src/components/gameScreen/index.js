import React from 'react';
import Score from './score';
import HealthBar from './healthBar';
import Life from './life';
import Input from './input';
import Question from './question';
import Answer from './answer';
import UpcomingChar from './upcomingChar';
import Indicator from './indicator/indicator';

const GameScreen = () =>
	<div>
		{ Score() }
		{ HealthBar() }
		{ Life() }
		{ Input() }
		{ Question() }
		{ Answer() }
		{ UpcomingChar() }
		{ Indicator() }
	</div>;

export default GameScreen;

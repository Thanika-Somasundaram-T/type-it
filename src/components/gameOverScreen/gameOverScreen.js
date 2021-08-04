/* eslint-disable no-undef */
import React from 'react';
import context from '../../core/context';

const GameOverScreen = () =>
	<div className="game-over">
		<h1>GAME OVER</h1>
		<h6>YOUR SCORE: { context.state.score }</h6>
		<button
			onClick={ () => context.actions.restart() }
		>
			PLAY AGAIN
		</button>
	</div>;

export default GameOverScreen;

/* eslint-disable no-undef */
import React from 'react';
import Service from '../services/stringService';
import context from '../core/context';

const CheckLife = () =>
	Service.checkLife(context.state)
	&& <div className="game-over">
		<h1>GAME OVER</h1>
		<h6>YOUR SCORE: { context.state.score }</h6>
		<button
			onClick={ () => location.reload() }
		>
			PLAY AGAIN
		</button>
	</div>;

export default CheckLife;

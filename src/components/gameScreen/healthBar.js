import React from 'react';
import context from '../../core/context';
import GameService from '../../services/gameService';
import Health from './health';

const getStyle = () => ({
	backgroundColor: GameService.colorIndicator(context.state.healthBar),
	width: `${ context.state.healthBar }%`,
	height: '100%',
});

const HealthBar = () =>
	<div className="health-bar">
		<div style={ getStyle() }/>
		{ Health() }
	</div>;

export default HealthBar;

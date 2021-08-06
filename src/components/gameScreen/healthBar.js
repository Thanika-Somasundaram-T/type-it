import React from 'react';
import context from '../../core/context';
import Health from './health';

const getStyle = () => ({
	backgroundColor: 'greenyellow',
	width: `${ context.state.healthBar }%`,
	height: '100%',
});

const HealthBar = () =>
	<div className="health-bar">
		<div style={ getStyle() }/>
		{ Health() }
	</div>;

export default HealthBar;

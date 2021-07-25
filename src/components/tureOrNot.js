import React from 'react';
import context from '../core/context';

const error = () =>
	<div
		className="type"
		style={ context.state.usrTyped !== ''
			? { minWidth: '10%' }
			: { } }
	>
		{	context.state.usrTyped }
	</div>;

const TrueFalse = () =>
	<div>
		{ context.state.value
			? <div className="img"/>
			: error() }
	</div>;

export default TrueFalse;

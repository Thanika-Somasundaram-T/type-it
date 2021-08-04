import React from 'react';
import context from '../../core/context';

const Life = () =>
	<div className="life">LIFE { context.state.life }</div>;

export default Life;

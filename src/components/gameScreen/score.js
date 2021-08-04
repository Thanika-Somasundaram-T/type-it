import React from 'react';
import context from '../../core/context';

const Score = () =>
	<div className="score"> SCORE { context.state.score }</div>;

export default Score;

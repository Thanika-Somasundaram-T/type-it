import React from '.react';
import context from '../../core/context';

const Answer = () =>
	<div className="text">{ context.state.answer }</div>;

export default Answer;

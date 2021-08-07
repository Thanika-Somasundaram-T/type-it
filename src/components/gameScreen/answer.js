import React from 'react';
import context from '../../core/context';

const Answer = () =>
	<div className="answer">{ context.state.answer }</div>;

export default Answer;

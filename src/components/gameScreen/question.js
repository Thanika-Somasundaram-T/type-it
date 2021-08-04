import React from 'react';
import context from '../../core/context';
import StringService from '../../services/stringService';

const Question = () =>
	<div
		className="display"
	>
		<span className="span">{ context.state.answer }</span>
		<span>{ StringService.displayQuestion(context.state) }</span>
	</div>;

export default Question;

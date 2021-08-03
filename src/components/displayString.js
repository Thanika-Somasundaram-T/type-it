/* eslint-disable no-magic-numbers */
import { React } from 'react';
import context from '../core/context';
import Service from '../services/stringService';

const DisplayString = () =>
	<div>
		<div className="score"> SCORE { context.state.score }</div>
		<div className="life">LIFE { context.state.life }</div>
		<div
			className="display"
		>
			<span className="span">{ context.state.answer }</span>
			<span>{ Service.displayQuestion(context.state) }</span>
		</div>
		<div className="text">{ context.state.answer }</div>

	</div>;

export default DisplayString;

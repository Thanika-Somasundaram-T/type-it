/* eslint-disable no-magic-numbers */
import { React } from 'react';
import context from '../core/context';
import Service from '../services/stringService';

const DisplayString = () =>
	<div>
		<div
			className="display"
		>
			<span className="span">{ context.state.answer }</span>
			<span>{ Service.displayQuestion(context.state) }</span>
		</div>;
		<div className="text">{ context.state.answer }</div>

	</div>;

export default DisplayString;

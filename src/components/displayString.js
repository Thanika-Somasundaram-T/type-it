import { React } from 'react';
import context from '../core/context';

const DisplayString = () =>
	<div
		className="display"
	>
		{ context.state.question }
	</div>;

export default DisplayString;

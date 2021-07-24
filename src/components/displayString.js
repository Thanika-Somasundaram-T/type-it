import { React } from 'react';
import context from '../core/context';

const DisplayString = () =>
	<div
		className="display"
	>
		{ context.state.rnString }
	</div>;

export default DisplayString;

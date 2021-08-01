import { React } from 'react';
import context from '../core/context';

const Input = () =>
	<input
		className="input"
		autoFocus={ true }
		tabIndex="0"
		contentEditable={ true }
		onKeyUp={ (evt) => {
			context.actions.updateInput(evt.key);
		} }
	/>;

export default Input;

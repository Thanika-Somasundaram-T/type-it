import { React } from 'react';
import context from '../../core/context';

const Input = () =>
	<input
		className="input"
		autoFocus={ true }
		tabIndex="0"
		contentEditable={ true }
		value={ context.state.answer }
		onKeyUp={ (evt) => {
			context.actions.updateError(evt.key);
			context.actions.updateInput(evt.key);
			context.actions.updateScore();
			context.actions.resetQuestion();
		} }
	/>;

export default Input;

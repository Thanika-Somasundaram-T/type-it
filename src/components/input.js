/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const Check = (key) =>
	(context.state.rnString[context.state.count] === key
		? context.actions.updateInput(key)
		: context.state.input === context.state.rnString
		&& context.actions.refreshString());

const Input = () =>
	<div
		className="input"
		value={ false }
		contentEditable={ true }
		onKeyUp={ (evt) => Check(evt.key) }
	/>;

export default Input;

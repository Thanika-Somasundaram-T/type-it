/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const Check = (evt) =>
	evt.keyCode >= 65
	&& evt.keyCode <= 122
	&& context.actions.updateInput(evt.key);

const Input = () =>
	<div
		className="input"
		value={ false }
		contentEditable={ true }
		onKeyUp={ (evt) => Check(evt) }
	/>;

export default Input;

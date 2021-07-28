/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import { React } from 'react';
import Update from './update';

const Input = () =>
	<input
		className="input"
		autoFocus={ true }
		contentEditable={ true }
		onKeyUp={ (evt) => Update(evt.key) }
	/>;

export default Input;

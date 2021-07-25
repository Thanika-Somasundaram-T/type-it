/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import { React } from 'react';
import Update from './update';

const Input = () =>
	<div
		className="input"
		value={ false }
		contentEditable={ true }
		onKeyUp={ (evt) => Update(evt.key) }
	/>;

export default Input;

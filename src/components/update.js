/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
import context from '../core/context';

const check = (key) =>
	(key.length < 2
		? context.state.rnString[context.state.count] === key
			? context.actions.updateInput(key)
			: context.actions.updateUsrTyped(key)
		: null);

const tab = () => context.actions.init();

const Update = (key) =>
	(key === 'Tab' || key === 'Enter'
		? tab()
		: check(key));

export default Update;

/* eslint-disable no-console */
/* eslint-disable no-magic-numbers */
import { rndString } from '@laufire/utils/random';
import context from '../core/context';

const refresh = Math.floor(Math.random() * 10) + 5;

const RandomString = () => rndString(refresh);

const UpdateToType = ({ rnString, count }) =>
	(rnString.length !== (count + 1)
		? rnString[count + 1]
		: context.actions.refreshString());

const Service = {
	RandomString,
	UpdateToType,
};

export default Service;

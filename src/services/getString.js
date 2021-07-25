/* eslint-disable no-magic-numbers */
import { rndString } from '@laufire/utils/random';

const refresh = Math.floor(Math.random() * 10) + 5;

const RandomString = () => rndString(refresh);

const Service = {
	RandomString,
};

export default Service;

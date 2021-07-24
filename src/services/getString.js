/* eslint-disable no-magic-numbers */
import { rndString } from '@laufire/utils/random';

const num = 10;
const refresh = Math.floor(Math.random() * num) + 5;

const Service = {
	randomString: rndString(refresh),
};

export default Service;

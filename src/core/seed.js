import config from './config';
import { rndString } from '@laufire/utils/random';

const num = 10;
const refreshIdLength = Math.floor(Math.random() * num);

const seed = {
	score: config.score,
	input: '',
	randomString: rndString(refreshIdLength),
};

export default seed;

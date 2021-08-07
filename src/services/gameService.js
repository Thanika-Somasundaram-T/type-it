import config from '../core/config';

const mid = 60;
const low = 20;
const max = 100;

const isAlive = ({ life }) =>
	life > 0;

const checkError = ({ error }) =>
	error === '';

const increaseHealth = ({ healthBar }) =>
	healthBar < max && healthBar + config.decreaseHealth;

const checkHealthBar = ({ healthBar }) =>
	healthBar <= 0;

const colorIndicator = (healthBar) =>
	(healthBar < low
		? 'red'
		: healthBar < mid
			? 'yellow'
			: 'greenyellow');

const GameService = {
	isAlive,
	checkError,
	checkHealthBar,
	increaseHealth,
	colorIndicator,
};

export default GameService;

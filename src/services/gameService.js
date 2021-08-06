
const isAlive = ({ life }) =>
	life > 0;

const checkError = ({ error }) =>
	error === '';

const checkHealthBar = ({ healthBar }) =>
	healthBar <= 0;

const GameService = {
	isAlive,
	checkError,
	checkHealthBar,
};

export default GameService;

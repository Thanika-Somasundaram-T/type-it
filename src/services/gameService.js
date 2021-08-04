
const isAlive = ({ life }) =>
	life > 0;

const checkError = ({ error }) =>
	error === '';

const GameService = {
	isAlive,
	checkError,
};

export default GameService;

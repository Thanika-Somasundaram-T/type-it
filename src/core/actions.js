import config from './config';
import StringService from '../services/stringService';

const updateInput = ({ state, data }) =>
	StringService.checkChar(state, data)
		&& {
			answer: state.answer + data,
			score: state.score + config.increment,
		};

const updateError = ({ state, data }) =>
	StringService.checkKey(data)
	&& (StringService.checkChar(state, data)
		? {
			error: '',
		}
		: {
			error: data,
			score: state.score - config.decrement,
			healthBar: state.healthBar - config.decreaseHealth,
		});

const updateScore = ({ state }) =>
	StringService.check(state)
		&& {
			score: state.score + config.bonus,
			healthBar: state.healthBar + config.decreaseHealth,
		};

const resetQuestion = ({ state }) =>
	StringService.check(state)
	&& {
		answer: '',
		question: StringService.randomString(),
	};

const restart = ({ seed }) =>
	seed;

const decreaseLife = ({ state }) => ({
	healthBar: 100,
	life: state.life - config.decrement,
});

const decreaseHealth = ({ state }) => ({
	healthBar: state.healthBar - config.decreaseHealth,
});

const actions = {
	updateInput,
	updateError,
	updateScore,
	resetQuestion,
	restart,
	decreaseHealth,
	decreaseLife,
};

export default actions;

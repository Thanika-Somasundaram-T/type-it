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
			score: state.score - config.increment,
			life: state.life - config.increment,
		});

const updateScore = ({ state }) =>
	StringService.check(state)
		&& {
			score: state.score + config.bonus,
		};

const resetQuestion = ({ state }) =>
	StringService.check(state)
	&& {
		answer: '',
		question: StringService.randomString(),
	};

const restart = ({ seed }) =>
	seed;

const actions = {
	updateInput,
	updateError,
	updateScore,
	resetQuestion,
	restart,
};

export default actions;

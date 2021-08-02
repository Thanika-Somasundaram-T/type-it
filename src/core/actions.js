import config from './config';
import Service from '../services/stringService';

const updateInput = ({ state, data }) =>
	Service.checkChar(state, data)
		&& {
			answer: state.answer + data,
			score: state.score + config.increment,
		};

const updateError = ({ state, data }) =>
	Service.checkKey(data)
	&& (Service.checkChar(state, data)
		? {
			error: '',
		}
		: {
			error: data,
			score: state.score - config.increment,
		});

const updateScore = ({ state }) =>
	Service.check(state)
		&& {
			score: state.score + config.bonus,
		};

const resetQuestion = ({ state }) =>
	Service.check(state)
	&& {
		answer: '',
		question: Service.randomString(),
	};

const actions = {
	updateInput,
	updateError,
	updateScore,
	resetQuestion,
};

export default actions;

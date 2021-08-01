import config from './config';
import Service from '../services/type-it';

const updateInput = ({ state, data }) =>
	Service.checkKey(data)
		&& (Service.checkChar(state, data)
			? {
				answer: Service.checkAns(state, data),
				score: state.score + config.increment,
				question: Service.checkQues(state, data),
				error: '',
			}
			: { error: data });

const actions = {
	updateInput,
};

export default actions;

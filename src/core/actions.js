import config from './config';
import Service from '../services/getString';

const init = ({ state }) => ({
	toType: state.rnString[0],
	usrTyped: '',
	value: false,
});

// const increaseScore = ({ state, data }) => ({
// 	count: state.count + data,
// });

const updateInput = ({ state, data }) => ({
	input: state.input + data,
	count: state.count + 1,
	toType: Service.UpdateToType(state),
	value: true,
	score: state.score + config.increment,

});

const updateUsrTyped = ({ state, data }) => ({
	usrTyped: data,
	value: false,
	score: state.score - config.increment,
});

const refreshString = ({ state }) => ({
	count: 0,
	input: '',
	usrTyped: '',
	rnString: Service.RandomString(),
	toType: 'Enter',
	score: state.score + config.bonus,
});

const actions = {
	init,
	// increaseScore,
	updateInput,
	refreshString,
	updateUsrTyped,
};

export default actions;

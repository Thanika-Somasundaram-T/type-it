import Service from '../services/getString';
const increaseScore = ({ state, data }) => ({
	count: state.count + data,
});

const updateInput = ({ state, data }) => ({
	input: state.input + data,
	count: state.count + 1,
});

const refreshString = () => ({
	count: 0,
	input: '',
	rnString: Service.randomString,
});

const actions = {
	increaseScore,
	updateInput,
	refreshString,
};

export default actions;

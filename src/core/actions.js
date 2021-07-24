const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const updateInput = ({ state, data }) => ({
	input: state.input + data,
});

const actions = {
	increaseCount,
	updateInput,
};

export default actions;

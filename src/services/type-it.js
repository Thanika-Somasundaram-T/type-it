import { rndString } from '@laufire/utils/random';
import context from '../core/context';

const ten = 10;
const five = 5;

const refresh = Math.floor(Math.random() * ten) + five;

const RandomString = () => rndString(refresh);

const checkChar = ({ question, answer }, key) =>
	question[answer.length] === key;

const checkQues = ({ question, answer }, data) =>
	(question === (answer + data)
		? RandomString()
		: question);

const checkAns = ({ question, answer }, data) =>
	(question === (answer + data)
		? ''
		: answer + data);

const checkKey = (key) =>
	key.length === 1;

const toType = () =>
	context.state.question[context.state.answer.length];

const Service = {
	RandomString,
	toType,
	checkQues,
	checkAns,
	checkChar,
	checkKey,
};

export default Service;

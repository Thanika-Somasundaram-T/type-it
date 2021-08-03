import { rndString } from '@laufire/utils/random';
import context from '../core/context';

const ten = 10;
const five = 5;

const refresh = Math.floor(Math.random() * ten) + five;

const randomString = () => rndString(refresh);

const checkChar = ({ question, answer }, key) =>
	question[answer.length] === key;

const checkKey = (key) =>
	key.length === 1;

const check = ({ question, answer }) =>
	question === answer;

const toType = () =>
	context.state.question[context.state.answer.length];

const displayQuestion = ({ question, answer }) =>
	question.slice(answer.length);

const checkLife = ({ life }) =>
	life === 0;

const Service = {
	randomString,
	toType,
	checkChar,
	checkKey,
	check,
	displayQuestion,
	checkLife,
};

export default Service;

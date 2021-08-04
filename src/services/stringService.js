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

const displayQuestion = ({ question, answer }) =>
	question.slice(answer.length);

const upcomingChar = () =>
	context.state.question[context.state.answer.length];

const StringService = {
	randomString,
	upcomingChar,
	checkChar,
	checkKey,
	check,
	displayQuestion,
};

export default StringService;

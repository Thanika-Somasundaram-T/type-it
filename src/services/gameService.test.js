/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
/* eslint-disable no-magic-numbers */
import GameService from './gameService';

describe('test gameService', () => {
	const {
		isAlive,
		checkError,
		increaseHealth,
		checkHealthBar,
		colorIndicator,
	} = GameService;

	test('check life value is non-negative', () => {
		const dict = { life: 1 };
		const result = isAlive(dict);

		expect(result).toEqual(true);
	});

	test('check error is empty', () => {
		const dict = { error: '' };
		const result = checkError(dict);

		expect(result).toEqual(true);
	});

	test('check healthBar doesn\'t exceed max(100)', () => {
		const dict = { healthBar: 101 };
		const result = increaseHealth(dict);

		expect(result).toEqual(false);
	});

	test('check increaseHealth returns Number less than 100', () => {
		const dict = { healthBar: 90 };
		const result = increaseHealth(dict);

		expect(result).toBeLessThanOrEqual(100);
	});

	test('check health is less than or equal to zero', ()=> {
		const dict = { healthBar: 0 };
		const result = checkHealthBar(dict);

		expect(result).toEqual(true);
	});

	test('return red when health is below 20', () => {
		const healthBar = 20;
		const result = colorIndicator(healthBar);

		expect(result).toEqual('red');
	});

	test('return yellow when health is below 60', () => {
		const healthBar = 60;
		const result = colorIndicator(healthBar);

		expect(result).toEqual('yellow');
	});

	test('return green when health is above 60', () => {
		const healthBar = 61;
		const result = colorIndicator(healthBar);

		expect(result).toEqual('greenYellow');
	});
});

import context from '../core/context';
import GameService from '../services/gameService';
import GameScreen from './gameScreen';
import GameOverScreen from './gameOverScreen';

const Game = () =>
	(GameService.isAlive(context.state)
		? GameScreen()
		: GameOverScreen());

export default Game;

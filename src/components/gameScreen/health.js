import context from '../../core/context';
import GameService from '../../services/gameService';

const Health = () =>
	GameService.checkHealthBar(context.state) && context.actions.decreaseLife();

export default Health;

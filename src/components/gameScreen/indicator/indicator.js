import Error from './error';
import Correct from './correct';
import GameService from '../../../services/gameService';
import context from '../../../core/context';

const Indicator = () =>
	(GameService.checkError(context.state)
		? Correct()
		: Error());

export default Indicator;

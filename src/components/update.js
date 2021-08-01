import React from 'react';
import Service from '../services/type-it';
import context from '../core/context';

const Update = () =>
	<div>
		{ context.state.error !== ''
			? <div className="error">{ context.state.error }</div>
			: <div className="img"/> }
		<div className="question">
			{ Service.toType() }
		</div>
	</div>;

export default Update;

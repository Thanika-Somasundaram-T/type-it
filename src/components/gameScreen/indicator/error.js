import React from 'react';
import context from '../../../core/context';

const error = () =>
	<div className="error">{ context.state.error }</div>;

export default error;

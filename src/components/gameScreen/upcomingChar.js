import React from 'react';
import StringService from '../../services/stringService';

const UpcomingChar = () =>
	<div className="question">{ StringService.upcomingChar()}</div>;

export default UpcomingChar;

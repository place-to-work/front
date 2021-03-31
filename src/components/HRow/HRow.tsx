import * as React from 'react';
import './HRow.scss';

export type HRowProps = {
    width: string;
};

const HRow: React.FC<HRowProps> = (
	{
		width,
	}: HRowProps) => (
	<div className="hrow" style={{width, height: 2}}/>
);

export default HRow;
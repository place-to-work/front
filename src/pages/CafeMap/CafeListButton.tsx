import React from 'react';
import Button from '@components/primitives/Button';


const CafeListButton: React.FC = () => {
	return <Button
		style={{
			width: 173,
			height: 39,
			backgroundColor: 'black',
			borderRadius: 8,
			position: 'absolute',
			bottom: 10,
			margin: '0 auto',
		}}
		href={'/places/'}
	>
		Списком
	</Button>;
}

export default CafeListButton;

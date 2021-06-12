import React from 'react';
import Button from '@components/primitives/Button';


const CafeListButton: React.FC = () => {
	return <div style={{width: '100vw', position: 'absolute', bottom: 10}}>
		<Button
			style={{
				width: 173,
				height: 39,
				backgroundColor: 'black',
				borderRadius: 8,
				margin: '0 auto',
			}}
			href={'/places/'}
		>
			Списком
		</Button>
	</div>;
}

export default CafeListButton;

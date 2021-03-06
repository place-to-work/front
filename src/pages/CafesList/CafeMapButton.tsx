import React from 'react';
import Button from '@components/primitives/Button';
import Typo, {TypographyType} from '@components/primitives/Typo';


const CafeMapButton: React.FC = () => {
	return <div style={{
		width: '100vw',
		position: 'fixed',
		bottom: 10,
		marginLeft: -10,
		display: 'flex',
		zIndex: 1,
	}}>
		<Button
			style={{
				boxShadow: '0 0 3px #fff',
				width: 173,
				height: 39,
				backgroundColor: 'black',
				borderRadius: 8,
				margin: '0 auto',
			}}
			href={'/places-map/'}
		>
			<Typo type={TypographyType.h4}>На карте</Typo>
		</Button>
	</div>;
}

export default CafeMapButton;

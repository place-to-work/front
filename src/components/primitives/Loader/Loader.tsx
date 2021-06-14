import React from 'react';
import './Loader.scss';


const Loader: React.FC = () => (
	<div style={{width: '100%', height: '100%'}}>
		<div className="lds-ripple">
			<div/>
			<div/>
		</div>
	</div>

);

export default Loader;
import React from 'react';
import BasePage from '@pages/BasePage/BasePage';
import {IconLeft, IconSize} from '@components/primitives/Icon';
import InnerCafeMap from './Map';
import CafeListButton from '@pages/CafeMap/CafeListButton';
import CafeViewButton from '@components/CafeViewButton';


const CafeMap: React.FC = () => {

	return (<BasePage
		headerProps={{
			left: () => <IconLeft size={IconSize.xl}/>,
		}}
		mainProps={{
			body: () => <div>
				<InnerCafeMap/>
				<CafeViewButton isList={true} style={{
					position: 'fixed',
					zIndex: 1,
					top: 0,
				}}/>
				<CafeListButton/>
			</div>,
		}}
	/>);
}

export default CafeMap;
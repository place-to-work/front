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
				<CafeViewButton isList={false} style={{
					position: 'fixed',
					zIndex: 1,
					top: 90,
					left: 0,
				}}/>
			</div>,
		}}
	/>);
}

export default CafeMap;
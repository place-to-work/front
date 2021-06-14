import React from 'react';
import BasePage from '@pages/BasePage/BasePage';
import {IconLeft, IconSize} from '@components/primitives/Icon';
import InnerCafeMap from './Map';
import CafeListButton from '@pages/CafeMap/CafeListButton';


const CafeMap: React.FC = () => {

	return (<BasePage
		headerProps={{
			left: () => <IconLeft size={IconSize.xl}/>
		}}
		mainProps={{
			body: () => <div>
				<InnerCafeMap/>
			</div>
		}}
		footerProps={{left: () => <CafeListButton/>}}
	/>);
}

export default CafeMap;
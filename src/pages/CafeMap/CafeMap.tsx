import React from 'react';
import BasePage from '@pages/BasePage/BasePage';
import {IconLeft, IconSize} from '@components/primitives/Icon';
import InnerCafeMap from './Map';
import CafeViewButton from '@components/CafeViewButton';


const CafeMap: React.FC = () => {

	return (<BasePage
		headerProps={{
			left: () => <IconLeft size={IconSize.xl}/>,
			middle: () => <CafeViewButton isList={false}/>,
		}}
		mainProps={{
			body: () => <div>
				<InnerCafeMap/>
			</div>,
		}}
	/>);
}

export default CafeMap;
import IconCenter from '@components/primitives/Icon/Icon';
import {IconSize, IconType} from '@components/primitives/Icon';
import React from 'react';


const CenterLogo: React.FC = () => <div style={{height: 40}}>
	<IconCenter
		size={IconSize.xxxl}
		className="icon-center"
		type={IconType.iconCenter}
	/>
</div>;

export default CenterLogo;
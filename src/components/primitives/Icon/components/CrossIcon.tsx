import * as React from 'react';
import BaseIcon, {BaseIconProps} from './BaseIcon';

const CrossIcon: React.FC<BaseIconProps> = (props: BaseIconProps) => (
	<BaseIcon {...props} width="24" height="24" viewBox="0 0 24 24">
		<path d="M20 2L2 20" stroke={props.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
		<path d="M2 2L20 20" stroke={props.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
	</BaseIcon>
);

export default React.memo<BaseIconProps>(CrossIcon);
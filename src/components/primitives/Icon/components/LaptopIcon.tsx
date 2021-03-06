
import * as React from 'react';
import BaseIcon, { BaseIconProps } from './BaseIcon';

const LaptopIcon: React.FC<BaseIconProps> = (props: BaseIconProps) => (
	<BaseIcon {...props} width="20" height="14" viewBox="0 0 20 14">
		<path fillRule="evenodd" clipRule="evenodd" d="M1.5 2C1.5 1.17157 2.17157 0.5 3 0.5H17C17.8284 0.5 18.5 1.17157 18.5 2V11C18.5 11.3842 18.3556 11.7346 18.1181 12H20V12.5C20 13.3284 19.3284 14 18.5 14H1.5C0.671573 14 0 13.3284 0 12.5V12H1.88195C1.64443 11.7346 1.5 11.3842 1.5 11V2ZM3 1.5C2.72386 1.5 2.5 1.72386 2.5 2V11C2.5 11.2761 2.72386 11.5 3 11.5H17C17.2761 11.5 17.5 11.2761 17.5 11V2C17.5 1.72386 17.2761 1.5 17 1.5H3Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M1.5 2C1.5 1.17157 2.17157 0.5 3 0.5H17C17.8284 0.5 18.5 1.17157 18.5 2V11C18.5 11.3842 18.3556 11.7346 18.1181 12H20V12.5C20 13.3284 19.3284 14 18.5 14H1.5C0.671573 14 0 13.3284 0 12.5V12H1.88195C1.64443 11.7346 1.5 11.3842 1.5 11V2ZM3 1.5C2.72386 1.5 2.5 1.72386 2.5 2V11C2.5 11.2761 2.72386 11.5 3 11.5H17C17.2761 11.5 17.5 11.2761 17.5 11V2C17.5 1.72386 17.2761 1.5 17 1.5H3Z" fill="currentColor"/>
	</BaseIcon>
);

export default React.memo<BaseIconProps>(LaptopIcon);

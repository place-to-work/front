
import * as React from 'react';
import BaseIcon, { BaseIconProps } from './BaseIcon';

const LocationIcon: React.FC<BaseIconProps> = (props: BaseIconProps) => (
	<BaseIcon {...props} width="20" height="20" viewBox="0 0 20 20">
		<path d="M4.14747 11.2739L8.85109 11.2866C8.959 11.2866 8.99074 11.3247 8.99074 11.4263L8.99708 16.1108C8.99708 17.2979 10.5078 17.5645 11.0283 16.4219L15.8399 5.96729C16.4048 4.73584 15.4653 3.91064 14.2847 4.4502L3.78566 9.27441C2.71925 9.76318 2.94142 11.2739 4.14747 11.2739Z" fill="currentColor"/>
		<path d="M4.14747 11.2739L8.85109 11.2866C8.959 11.2866 8.99074 11.3247 8.99074 11.4263L8.99708 16.1108C8.99708 17.2979 10.5078 17.5645 11.0283 16.4219L15.8399 5.96729C16.4048 4.73584 15.4653 3.91064 14.2847 4.4502L3.78566 9.27441C2.71925 9.76318 2.94142 11.2739 4.14747 11.2739Z" fill="currentColor"/>
	</BaseIcon>
);

export default LocationIcon;
// export default React.memo<BaseIconProps>(LocationIcon);

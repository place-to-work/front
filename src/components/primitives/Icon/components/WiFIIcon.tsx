
import * as React from 'react';
import BaseIcon, { BaseIconProps } from './BaseIcon';

const WifiIcon: React.FC<BaseIconProps> = (props: BaseIconProps) => (
	<BaseIcon {...props} width="20" height="20" viewBox="0 0 20 20">
		<path d="M3.51906 9.64893C3.66505 9.80127 3.89992 9.79492 4.05226 9.63623C5.62648 7.9668 7.68312 7.09082 10 7.09082C12.3233 7.09082 14.3926 7.97314 15.9605 9.64258C16.1065 9.78857 16.335 9.78857 16.481 9.62988L17.376 8.72852C17.5156 8.59521 17.5156 8.40479 17.4014 8.27148C15.8462 6.34814 12.9644 5.00244 10 5.00244C7.03566 5.00244 4.14747 6.34814 2.5923 8.27148C2.47804 8.40479 2.48439 8.59521 2.61769 8.72852L3.51906 9.64893ZM6.19142 12.2832C6.35646 12.4419 6.57863 12.4229 6.73732 12.2515C7.52443 11.4072 8.76222 10.8296 10 10.8359C11.2568 10.8296 12.4946 11.4263 13.2944 12.2769C13.4404 12.4355 13.6499 12.4355 13.8086 12.2769L14.8179 11.2993C14.9512 11.1724 14.9639 10.9946 14.8496 10.855C13.834 9.64258 11.9932 8.79199 10 8.79199C8.00685 8.79199 6.17238 9.64258 5.15675 10.855C5.03615 10.9946 5.04884 11.166 5.18214 11.2993L6.19142 12.2832ZM10.0064 15.8442C10.1714 15.8442 10.3174 15.7681 10.5777 15.5205L12.1455 14.0098C12.2725 13.8828 12.2979 13.6924 12.1836 13.5527C11.7139 12.9561 10.895 12.5117 10.0064 12.5117C9.0923 12.5117 8.25441 12.9814 7.78468 13.6099C7.70216 13.7305 7.7466 13.8892 7.8672 14.0098L9.43507 15.5205C9.69533 15.7681 9.84132 15.8442 10.0064 15.8442Z" fill="#E2B37A"/>
		<path d="M3.51906 9.64893C3.66505 9.80127 3.89992 9.79492 4.05226 9.63623C5.62648 7.9668 7.68312 7.09082 10 7.09082C12.3233 7.09082 14.3926 7.97314 15.9605 9.64258C16.1065 9.78857 16.335 9.78857 16.481 9.62988L17.376 8.72852C17.5156 8.59521 17.5156 8.40479 17.4014 8.27148C15.8462 6.34814 12.9644 5.00244 10 5.00244C7.03566 5.00244 4.14747 6.34814 2.5923 8.27148C2.47804 8.40479 2.48439 8.59521 2.61769 8.72852L3.51906 9.64893ZM6.19142 12.2832C6.35646 12.4419 6.57863 12.4229 6.73732 12.2515C7.52443 11.4072 8.76222 10.8296 10 10.8359C11.2568 10.8296 12.4946 11.4263 13.2944 12.2769C13.4404 12.4355 13.6499 12.4355 13.8086 12.2769L14.8179 11.2993C14.9512 11.1724 14.9639 10.9946 14.8496 10.855C13.834 9.64258 11.9932 8.79199 10 8.79199C8.00685 8.79199 6.17238 9.64258 5.15675 10.855C5.03615 10.9946 5.04884 11.166 5.18214 11.2993L6.19142 12.2832ZM10.0064 15.8442C10.1714 15.8442 10.3174 15.7681 10.5777 15.5205L12.1455 14.0098C12.2725 13.8828 12.2979 13.6924 12.1836 13.5527C11.7139 12.9561 10.895 12.5117 10.0064 12.5117C9.0923 12.5117 8.25441 12.9814 7.78468 13.6099C7.70216 13.7305 7.7466 13.8892 7.8672 14.0098L9.43507 15.5205C9.69533 15.7681 9.84132 15.8442 10.0064 15.8442Z" fill="#FDA344"/>
	</BaseIcon>
);

export default React.memo<BaseIconProps>(WifiIcon);
import * as React from 'react';
import {CSSProperties} from 'react';
import './Header.scss';

import Tag, {ButtonColor} from '@components//primitives/Button';
import {EarIcon, IconCenter, IconLeft} from "@components/primitives/Icon";



export enum HeaderType {
	initial = 'initial',
	system = 'system'
}

interface HeaderProps {
	addStyle?: CSSProperties;
	type?: HeaderType;
	atPlace?: boolean;
	withBack?: boolean;
}


const Header: React.FC<HeaderProps> = ({ type=HeaderType.initial, addStyle, atPlace, withBack}) => (
	<header className="header" style={addStyle}>
		{type === HeaderType.initial ?
			<>
				<IconCenter className="icon-center"/>
			</>: <>
				{withBack? <EarIcon/> : <IconLeft/>}
				{ atPlace ? <Tag color={ButtonColor.grey}>Я в кофейне</Tag> : <EarIcon/>}
			</>
		}
	</header>
);

export default Header;
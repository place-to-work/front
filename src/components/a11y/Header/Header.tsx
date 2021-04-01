import * as React from 'react';
import {CSSProperties} from 'react';
import './Header.scss';
import {BackIcon, IconCenter, IconLeft} from "@components/primitives/Icon";
import Tag from "@components/primitives/Tag";
import {ButtonColor} from "@components/primitives/Button";
import {useHistory} from "react-router-dom";

export enum HeaderType {
	center = 'center',
	left = 'left'
}
interface HeaderProps {
	style?: CSSProperties;
	type?: HeaderType;
	withBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({withBack = false, type = HeaderType.center, ...rest}) =>{
	const history = useHistory();
	return (
		<header className="header" {...rest}>
			{type === HeaderType.center ? <IconCenter className="icon-center"/> :
				<>
					{withBack ? <BackIcon onClick={()=>history.push('/cafes')}/> : <IconLeft/>}
					<Tag color={ButtonColor.grey}>Я в кофейне</Tag>
				</>}
		</header>
	);
}

export default Header;
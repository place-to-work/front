import * as React from 'react';
import {CSSProperties} from 'react';
import './Header.scss';
import {BackIcon, IconCenter, IconLeft, IconSize} from "@components/primitives/Icon";
import Tag from "@components/primitives/Tag";
import {ButtonColor} from "@components/primitives/Button";
import {useHistory} from "react-router-dom";

interface HeaderProps {
	style?: CSSProperties;
	withBack?: boolean;
	withLeftLogo?: boolean;
	withCenterLogo?: boolean;
	withInWorkPlaceHref?:boolean;
}

const Header: React.FC<HeaderProps> = ({
	withBack,
	withCenterLogo,
	withInWorkPlaceHref,
	withLeftLogo,
	...rest
}) => {
	const history = useHistory();
	return (
		<header className="header" {...rest}>
			{withBack && <BackIcon onClick={()=>history.goBack()}/>}
			{withCenterLogo && <IconCenter size={IconSize.xxl} className="icon-center"/>}
			{withLeftLogo && !withBack && <IconLeft size={IconSize.xl}/>}
			{withInWorkPlaceHref && <Tag color={ButtonColor.grey}>Я в кофейне</Tag>}
		</header>
	);
}

export default Header;
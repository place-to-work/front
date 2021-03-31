import * as React from 'react';
import { iconEntities, BaseIconProps, IconType } from './components';

export type IconProps = BaseIconProps & {
  type: IconType;
};

const Icon: React.FC<IconProps> = ({ type, ...baseProps }: IconProps) => {
	const Comp = iconEntities[type];

	if (!Comp) {
		return null;
	}

	return <Comp {...baseProps} />;
};

export { Icon as IconNonMemo };

const IconMemo = React.memo<IconProps>(Icon);
IconMemo.displayName = 'Icon';

export default IconMemo;

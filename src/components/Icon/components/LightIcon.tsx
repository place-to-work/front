
import * as React from 'react';
import BaseIcon, { BaseIconProps } from './BaseIcon';

const LightIcon: React.FC<BaseIconProps> = (props: BaseIconProps) => (
	<BaseIcon {...props} width="20" height="20" viewBox="0 0 20 20">
		<path d="M7.6133 14.3843H12.3804C12.6724 14.3843 12.8692 14.1875 12.8692 13.9019V12.9624C12.8692 11.4263 15.1353 10.4805 15.1353 7.62402C15.1353 4.59619 13.0659 2.55225 10 2.55225C6.92775 2.55225 4.85841 4.59619 4.85841 7.62402C4.85841 10.4805 7.12453 11.4263 7.12453 12.9624V13.9019C7.12453 14.1875 7.32765 14.3843 7.6133 14.3843ZM7.75929 16.1997H12.2407C12.6026 16.1997 12.8945 15.9014 12.8945 15.5459C12.8945 15.1904 12.6026 14.8921 12.2407 14.8921H7.75929C7.39747 14.8921 7.10548 15.1904 7.10548 15.5459C7.10548 15.9014 7.39747 16.1997 7.75929 16.1997ZM10 17.8438C10.9712 17.8438 11.6694 17.3867 11.7393 16.7075H8.26076C8.32423 17.3867 9.01613 17.8438 10 17.8438Z" fill="#E2B37A"/>
		<path d="M7.6133 14.3843H12.3804C12.6724 14.3843 12.8692 14.1875 12.8692 13.9019V12.9624C12.8692 11.4263 15.1353 10.4805 15.1353 7.62402C15.1353 4.59619 13.0659 2.55225 10 2.55225C6.92775 2.55225 4.85841 4.59619 4.85841 7.62402C4.85841 10.4805 7.12453 11.4263 7.12453 12.9624V13.9019C7.12453 14.1875 7.32765 14.3843 7.6133 14.3843ZM7.75929 16.1997H12.2407C12.6026 16.1997 12.8945 15.9014 12.8945 15.5459C12.8945 15.1904 12.6026 14.8921 12.2407 14.8921H7.75929C7.39747 14.8921 7.10548 15.1904 7.10548 15.5459C7.10548 15.9014 7.39747 16.1997 7.75929 16.1997ZM10 17.8438C10.9712 17.8438 11.6694 17.3867 11.7393 16.7075H8.26076C8.32423 17.3867 9.01613 17.8438 10 17.8438Z" fill="#FDA344"/>
	</BaseIcon>
);

export default React.memo<BaseIconProps>(LightIcon);

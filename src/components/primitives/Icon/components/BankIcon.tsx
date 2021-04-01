import * as React from 'react';
import BaseIcon, { BaseIconProps } from './BaseIcon';

const BankIcon: React.FC<BaseIconProps> = (props: BaseIconProps) => (
    <BaseIcon {...props} width="40" height="41" viewBox="0 0 40 41" fill="currentColor">
        <rect y="0.258789" width="40" height="40" rx="20" fill="black"/>
        <path d="M27.4619 12.2314H12.5293C10.5781 12.2314 9.53223 13.2686 9.53223 15.2021V15.9756H30.459V15.2021C30.459 13.2686 29.4131 12.2314 27.4619 12.2314ZM13.2588 24.7559C12.7402 24.7559 12.3975 24.4043 12.3975 23.9121V22.2861C12.3975 21.7939 12.7402 21.4424 13.2588 21.4424H15.4121C15.9307 21.4424 16.2822 21.7939 16.2822 22.2861V23.9121C16.2822 24.4043 15.9307 24.7559 15.4121 24.7559H13.2588ZM12.5293 27.6211H27.4619C29.4131 27.6211 30.459 26.584 30.459 24.6416V18.085H9.53223V24.6416C9.53223 26.584 10.5781 27.6211 12.5293 27.6211Z" fill="white"/>
    </BaseIcon>
);

export default React.memo<BaseIconProps>(BankIcon);
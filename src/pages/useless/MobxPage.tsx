import {observer} from 'mobx-react-lite';
import React from 'react';
import {CurrentTime} from '@models/useless/CurrentTime';

interface OwnProps {
	currentTime: CurrentTime;
}

const MobxPage: React.FC<OwnProps> = ({currentTime}) => <div>{currentTime.time.toISOString()}</div>;

export default observer(MobxPage);

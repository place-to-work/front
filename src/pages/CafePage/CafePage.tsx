import React from 'react';
import {observer} from 'mobx-react-lite';
import DetailedInfo from '@components/DetailedInfo';

const CafePage: React.FC = () => (<div>
	<DetailedInfo/>
</div>);

export default observer(CafePage);
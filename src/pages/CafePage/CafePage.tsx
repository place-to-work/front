import React from 'react';
import {observer} from 'mobx-react-lite';
import DetailedInfo from '@components/DetailedInfo';
import Header from '@components/a11y/Header';


const CafePage: React.FC = () => (
	<div className="cafe-page">
		<Header/>
		<DetailedInfo />
	</div>);

export default observer(CafePage);
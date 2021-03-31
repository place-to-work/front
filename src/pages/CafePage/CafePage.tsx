import React from 'react';
import {observer} from 'mobx-react-lite';
import DetailedInfo from '@components/DetailedInfo';
import Header from '@components/a11y/Header';
import { useParams } from 'react-router-dom';

const CafePage: React.FC = () => {
	const { id } = useParams();
	return (
		<div className="cafe-page">
			<Header/>
			{id}
			<DetailedInfo />
		</div>);
};

export default observer(CafePage);
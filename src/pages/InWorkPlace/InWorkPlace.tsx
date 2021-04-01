import './InWorkPlace.scss';
import PageContainer from '@components/a11y/PageContainer';
import React from 'react';
import Header from '@components/a11y/Header';
import QRCode from 'qrcode.react';
import Main from '@components/a11y/Main';

interface InWorkPlaceProps {

}

const InWorkPlace: React.FC<InWorkPlaceProps> = () => {

	return <PageContainer>
		<Header withBack />
		<Main style={{padding: 10, width: 360}}><QRCode value="qwer"/></Main>
	</PageContainer>
};

export default InWorkPlace;

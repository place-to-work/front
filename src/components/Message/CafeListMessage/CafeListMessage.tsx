import React from 'react';
import './CafeListMessage.scss';
import {Message, MessTheme} from '@models/Message';

interface OwnProps {
	theme: MessTheme;
}

const CafeListMessage: React.FC<OwnProps> = ({theme}) => {
	const [message, setMessage] = React.useState<null | Message>(null);

	React.useEffect(() => {

	}, []);
	return null;
}
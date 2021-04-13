import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypographyType} from '@components/primitives/Typo';
import Button, {ButtonColor} from '@components/primitives/Button';
import CenterLogo from '@components/primitives/CenterLogo/CenterLogo';
import Http from '@network/Http/Http';
import {observer} from 'mobx-react-lite';
import t, {Phrase} from '@models/Translate';
import User, {UserType} from '@models/User';
import Notification from '@models/Notification/Notification';


const StaffPage: React.FC = () => {
	const history = useHistory();

	const {id} = useParams<{ id }>();

	React.useEffect(() => {
		if (User.isAuthenticated && User.userType === UserType.client) {
			history.push('/places');
		}
	}, [User.id]);

	if (!id) {
		return null;
	}

	const onTea = React.useCallback(async () => {
		const resp = await Http.fetchPost({
			path: '/products/choice/',
			body: JSON.stringify({
				user: id,
				place: User.place,
				product: 1,

			}),
		});
		if (resp.ok) {
			window.close();
		} else {
			// history.push('/auth')
		}

	}, [User.place, id]);

	const onCoffee = React.useCallback(async () => {
		const resp = await Http.fetchPost({
			path: '/products/choice/',
			body: JSON.stringify({
				user: id,
				place: User.place,
				product: 2,

			}),
		});
		Notification.info(String(resp.ok));
		if (resp.ok) {
			// window.close();
		} else {
			// history.push('/auth')
		}

	}, [User.place, id]);

	return <BasePage
		headerProps={{middle: () => <CenterLogo/>}}
		mainProps={{
			body: () => <>
				<Typo
					style={{marginBottom: '72px'}} type={TypographyType.h1}
					block>{t(Phrase.whatClientPicked)}</Typo>

				<Button
					disabled={User.userType === UserType.client} onClick={onTea}
					style={{marginBottom: '36px'}} full color={ButtonColor.accentGrey}>
					{t(Phrase.tea)}
				</Button>
				<Button
					disabled={User.userType === UserType.client} onClick={onCoffee} full
					color={ButtonColor.accentGrey}>
					{t(Phrase.coffee)}
				</Button>
			</>,
		}
		}
	/>;

};

export default observer(StaffPage);
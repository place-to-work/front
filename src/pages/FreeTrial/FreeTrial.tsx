import './FreeTrial.scss';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import BasePage from '@pages/BasePage';
import Typo, {TypoColor, TypographyType} from '@components/primitives/Typo';
import {BackIcon, IconSize} from '@components/primitives/Icon';
import {observer} from 'mobx-react-lite';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';
import cn from 'classnames';
import Separator from '@components/primitives/Separator';
import Http from '@network/Http';
import Message from '@models/Notification/Notification';
import t, {Phrase} from '@models/Translate/Translate';

interface InWorkPlaceProps {
    qrValue: string;
}

function openTab(url) {
	// Create link in memory
	const a = window.document.createElement('a');
	a.target = '_blank';
	a.href = url;

	// Dispatch fake click
	const e = window.document.createEvent('MouseEvents');
	e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	a.dispatchEvent(e);
}


const FreeTrial: React.FC = () => {
	const history = useHistory();
	// const [uuid, setUuid] = React.useState('');

	const [url, setUrl] = React.useState<string | null>(null);

	// const date = new Date(User.subscribedUntil);
	// console.log(`user = \n${JSON.stringify(User, null, 4)}`);
	// const day = date.getDate();
	// const month = date.getMonth();
	//
	// const tmpMobileWidth = {maxWidth: 360};

	const [isToday, setIsToday] = useState(false);

	const changeDay = React.useCallback(()=>{

		setIsToday((today)=>!today);
	},[setIsToday]);

	const today = new Date();
	const days: Date[] = [];
	for(let i = 1; i <= 7; i++){
		const date = new Date(today.getFullYear(), today.getMonth(), today.getDate()+i);
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		days.push(new Date(date));
	}
	console.log({days});

	const [currentDay, setCurrentDay] = useState<Date>(days[0]);

	React.useEffect(() => {

		console.log({
			'subscription': 2,
			'subscribe_begin': currentDay.toISOString().toString()
		});
		Http.fetchPost({
			path: '/payments/',
			body: JSON.stringify({
				'subscription': 2,
				'subscribe_begin': currentDay.toISOString().toString()
			}),
		})
			.then((r) => {
				r.json().then((data) => {
					try {
						if (data?.url) {
							console.log(data?.url);
							setUrl(data.url);
						} else{
							Message.error('???????????? ????????????????????. ???????????????????? ?????? ??????.');
						}
					} catch (e) {
						console.log(`subscription main error: ${e}`);
					}
				});
			})
			.catch(console.log);
	}, [currentDay]);


	return <BasePage
		headerProps={{
			left: () => <BackIcon size={IconSize.m} onClick={() => history.push('/in-work-place')}/>,
		}}
		footerProps={{
			className:'trial-background'
		}}
		mainProps={{
			className: 'trial-background',
			body: () => <div className="free-trial">
				<Typo type={TypographyType.h1} color={TypoColor.white}>?????????????? ????????</Typo>
				<Typo type={TypographyType.h4} color={TypoColor.white}>???? ???????????? ?????????????? ????????, ?? ?????????????? ???????????? ???????????????????? ?? ????????, ?? ?????????????????????????????? ?????????? ???????????????????? ???????????? ???????????????? ?? ?????????????? 24 ??????????.</Typo>

				<div className="free-trial__buttons">
					<Button buttonSize={ButtonSize.tiny} className="free-trial__today-btn" color={isToday ? ButtonColor.white: ButtonColor.black} onClick={()=>{
						setIsToday(true);
						setCurrentDay(today);
					}} >??????????????</Button>
					<Button buttonSize={ButtonSize.tiny} className="free-trial__today-btn" color={!isToday ? ButtonColor.white: ButtonColor.black} onClick={()=>{
						setIsToday(false);}
					}>???????????? ????????</Button>
				</div>
				<div className={isToday && 'days-hidden'}>
					<Typo block color={TypoColor.darkGrey}>?????????????????? 7 ????????</Typo>
					<div className="free-trial__day-buttons">
						{days.map((day) => <div key={day.getDate()}
							onClick={
								()=>{
									setCurrentDay(day);
									console.log('set day', day.toISOString(), day.getDate());
								}
							}
							className={cn('free-trial__day-btn', day.getDate() === currentDay.getDate() && 'free-trial__day-btn_selected' )}><Typo>{day.getUTCDate() }</Typo></div>)}
					</div>
				</div>

				<Separator style={{backgroundColor: 'white', marginTop: 24}}/>

				<div className="free-trial__access">
					<Typo color={TypoColor.white} type={TypographyType.h4}>???????????? ???? 24 ????????</Typo>
					<Typo color={TypoColor.white} type={TypographyType.h3}>350 ??????</Typo>
				</div>
				<Button
					disabled={!url}
					element={'a'}
					href={url}
					full color={ButtonColor.accent}>???????????????? ?????????????? ????????????</Button>

			</div>,
		}}
	/>;
};

export default observer(FreeTrial);

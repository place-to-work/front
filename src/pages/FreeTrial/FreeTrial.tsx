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

interface InWorkPlaceProps {
    qrValue: string;
}


const FreeTrial: React.FC = () => {
	const history = useHistory();
	// const [uuid, setUuid] = React.useState('');

	// React.useEffect(() => {
	//     Http.fetchPost({path: '/users/uuid/', body: undefined})
	//         .then((response) => {
	//             if (response.ok) {
	//                 response.json()
	//                     .then((body) => {
	//                         const uuid = body.subscribe_uuid;
	//                         setUuid(uuid);
	//                     });
	//             }
	//         });
	// }, []);

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
		days.push(new Date(today.getFullYear(), today.getMonth(), today.getDate()+i));
	}

	const [currentDay, setCurrentDay] = useState<number>(days[0].getDate());

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
				<Typo type={TypographyType.h1} color={TypoColor.white}>Пробный день</Typo>
				<Typo type={TypographyType.h4} color={TypoColor.white}>Вы можете выбрать день, в который хотите поработать в кафе, и воспользоваться всеми удобствами полной подписки в течение 24 часов.</Typo>

				<div className="free-trial__buttons">
					<Button buttonSize={ButtonSize.tiny} className="free-trial__today-btn" color={isToday ? ButtonColor.white: ButtonColor.black} onClick={()=>{
						changeDay();
						setCurrentDay(today.getDate());
					}} >Сегодня</Button>
					<Button buttonSize={ButtonSize.tiny} className="free-trial__today-btn" color={!isToday ? ButtonColor.white: ButtonColor.black} onClick={changeDay}>Другой день</Button>
				</div>
				<div className={isToday && 'days-hidden'}>
					<Typo block color={TypoColor.darkGrey}>Ближайшие 7 дней</Typo>
					<div className="free-trial__day-buttons">
						{days.map((day)=> <div key={day.getDate()}
							onClick={()=>setCurrentDay(day.getDate())}
							className={cn('free-trial__day-btn', day.getDate() === currentDay && 'free-trial__day-btn_selected' )}><Typo>{day.getDate()}</Typo></div>)}
					</div>
				</div>

				<Separator style={{backgroundColor: 'white', marginTop: 24}}/>

				<div className="free-trial__access">
					<Typo color={TypoColor.white} type={TypographyType.h4}>Доступ на 24 часа</Typo>
					<Typo color={TypoColor.white} type={TypographyType.h3}>350 руб</Typo>
				</div>
				<Button full color={ButtonColor.accent}>Оплатить пробный период</Button>

			</div>,
		}}
	/>;
};

export default observer(FreeTrial);

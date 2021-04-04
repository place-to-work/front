import {observer} from 'mobx-react-lite';
import React, {useCallback, useContext} from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
// import Header from "@components/a11y/Header";
// import PageContainer from '@components/a11y/PageContainer';
// import Main from '@components/a11y/Main';
import {useHistory} from "react-router-dom";
import BottomBar from "@components/a11y/BottomBar";
import BasePage from "@pages/BasePage";
import {IconLeft, IconSize} from "@components/primitives/Icon";
import {UserContext} from "@models/UserProvider";
import {useLocalStore} from "../../mobx/hooks/useLocalStore";
import UserStore from "../../mobx/local/UserStore/UserStore";


function isDateBeforeToday(date: Date) {
	const today = new Date()
	console.log(date, today )

	return date <= today;
}


const CafeListPage: React.FC = () => {

	const [cafesState, setCafesState] = React.useState<CafeCardProps[]>([]);


	React.useEffect(() => {
		Http.fetchGet({
			path: '/places/',
		})
			.then((r) => {
				r.json().then(((data) => {
					if(!data){
						return null;
					}
					data?.forEach((el) => {
						setCafesState((old) => [...old, {
							id: el.id,
							imageSrc: el['main_image'] || (el['images'] && el['images'][0]),
							name: el['full_name'] || el['short_name'],
							statuses: el.categories,
							averagePrice: el['average_bill'],
							workLoadText: el.occupancy,
							wifi: el.wifi,
							address: el.address,
							electricity: el['power_socket'],
							quiet: el.silence,
							light: el.light,
							time: el['opening_hours'] && el['opening_hours']['open_time'] && el['opening_hours']['close_time'] &&`${el['opening_hours']['open_time']} - ${el['opening_hours']['close_time']}`,
							workLoad: el['work_places'],
							mapSrc: (el.address || el['full_name'] || el['short_name'] )&& `https://yandex.ru/maps/213/moscow/search/${el.address || el['full_name'] || el['short_name']}`
						} as CafeCardProps]);
					});
				}));
			})
			.catch(console.log);
	}, []);

	// const { user } = useContext(UserContext);

	const store = useLocalStore(() => new UserStore());

	const [showBlock, setShowBlock] = React.useState(false);

	React.useEffect(()=>{
		console.log('user effect date',isDateBeforeToday(store.user.subscribeDate) )
		if(isDateBeforeToday(store.user.subscribeDate)){
			setShowBlock(true);
		}

	},[store.user])




	const cafesMemo = React.useMemo(()=>cafesState.map((cafe: CafeCardProps, index: number) => <CafeCard {...cafe} key={index}/>),[cafesState])

 	return (<BasePage headerProps={{left:()=><IconLeft size={IconSize.xl}/>}} footerProps={{}} mainProps={{
		body: () =><>
			<Typo className="title" type={TypographyType.h2} style={{padding: '16px 0'}}>Все заведения</Typo>
			{cafesMemo}
			<BottomBar opened={showBlock} setOpened={setShowBlock}/>
		</>
	}}/>);
};

export default observer(CafeListPage);

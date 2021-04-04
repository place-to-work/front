import {observer} from 'mobx-react-lite';
import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import './CafeList.scss';
import Http from '@network/Http/Http';
// import Header from "@components/a11y/Header";
// import PageContainer from '@components/a11y/PageContainer';
// import Main from '@components/a11y/Main';
import {useHistory} from "react-router-dom";
import BottomBar from "@components/a11y/BottomBar";
import BasePage from "@pages/BasePage";
import {IconLeft, IconSize} from "@components/primitives/Icon";
import {useLocalStore} from "../../mobx/hooks/useLocalStore";
import UserStore from "../../mobx/local/UserStore/UserStore";
import Tag from "@components/primitives/Tag";
import {ButtonColor} from "@components/primitives/Button";


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







	const history = useHistory();
	const store = useLocalStore(() => new UserStore());
	const cafesMemo = React.useMemo(()=>cafesState.map((cafe: CafeCardProps, index: number) => <CafeCard {...cafe} className="cafes-list__card" key={index}/>),[cafesState])

	React.useEffect(()=>{
		store.fetchUser();
	},[])
	React.useEffect(()=>{
		console.log('list user111111', store.user)
	},[store.user])

 	return (<BasePage
		headerProps={{left:()=><IconLeft size={IconSize.xl}/>, right: ()=><Tag color={ButtonColor.grey} onClick={()=>history.push('/in-place')}><Typo type={TypographyType.h5} style={{width:'100%'}}textAlign={TypoTextAlign.center}>Я в кофейне</Typo></Tag>} }
		footerProps={{}} mainProps={{
		body: () =><>
			<Typo className="title" type={TypographyType.h2} style={{padding: '16px 0'}}>Все заведения</Typo>
			<div className="cafes-list">
				{cafesMemo}
			</div>


			<BottomBar />
		</>
	}}/>);
};

export default observer(CafeListPage);

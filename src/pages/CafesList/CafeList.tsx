import {observer} from 'mobx-react-lite';
import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/primitives/Typo';
import './CafeList.scss';

const data: CafeCardProps[] = [
	{
		id: '1',
		name: 'Заведение "Ветерок"'
	},
	{
		id: '2',
		name: 'Заведение "Пушок"'
	},
	{
		id: '3',
		name: 'Заведение "Котелок"'
	},
	{
		id: '4',
		name: 'Заведение "Коворкинг"'
	},
	{
		id: '5',
		name: 'Заведение "Музей"'
	},

];
const CafeListPage: React.FC = () => (<div className="cafes-list">
	<Typo className="title" type={TypographyType.h2}>Все заведения</Typo>
	{' '}
	{data.map((cafe:CafeCardProps, index:number)=><CafeCard {...cafe} key={index}/>)}
</div>);

export default observer(CafeListPage);

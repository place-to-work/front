import {observer} from 'mobx-react-lite';
import React from 'react';
import CafeCard, {CafeCardProps} from '@components/CafeCard/CafeCard';
import Typo, {TypographyType} from '@components/Typo';

const data: CafeCardProps[] = [
	{
		name: 'Заведение "Ветерок"'
	},
	{
		name: 'Заведение "Пушок"'
	},
	{
		name: 'Заведение "Котелок"'
	},
	{
		name: 'Заведение "Коворкинг"'
	},
	{
		name: 'Заведение "Музей"'
	},

];
const CafeListPage: React.FC = () => (<div>
	<Typo type={TypographyType.h2}>Все заведения</Typo>
	{data.map((cafe:CafeCardProps, index:number)=><CafeCard {...cafe} key={index}/>)}
</div>);

export default observer(CafeListPage);

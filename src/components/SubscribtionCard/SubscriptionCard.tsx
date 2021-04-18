import * as React from 'react';
import './SubscriptionCard.scss';
import {CheckIcon, CupIcon, IconColor, IconSize, LaptopIcon, WorkIcon} from '@components/primitives/Icon';
import Typo, {TypoColor, TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import Button, {ButtonSize} from '@components/primitives/Button';
import {setPayOffer} from '@utils/payStorage';
import t, {Phrase} from '@models/Translate/Translate';
import Http from '@network/Http/Http';
import Separator from '@components/primitives/Separator';
import ym from 'react-yandex-metrika';


const SubscriptionCard: React.FC = () => {
	const [url, setUrl] = React.useState<string | null>(null);

	React.useEffect(() => {
		Http.fetchPost({
			path: '/payments/',
			body: null,
		})
			.then((r) => {
				r.json().then((data) => {
					try {
						if (data?.url) {
							setUrl(data?.url);
							// window.open(data.url, '_blank')
						} else {
							// window.open('http://google.com', '_blank')
						}

					} catch (e) {
						console.log(`subscription main error: ${e}`);
					}
				});
			})
			.catch(console.log);
	}, []);

	return (
		<div className="card">
			<Typo color={TypoColor.white} type={TypographyType.h3} textAlign={TypoTextAlign.start} block
			      style={{lineHeight: '24px', marginTop: 24, fontWeight: 500}}
			>
				Подписка на сервиc
			</Typo>
			<div className="card__features">
				<Typo
					color={TypoColor.white}
					icon={<CupIcon color={IconColor.white} className="card__icon"
					               size={IconSize.xs}/>}
					type={TypographyType.h4}
				>
					Безлимитный чай и кофе
				</Typo>
				<Typo
					color={TypoColor.white}
					icon={<WorkIcon color={IconColor.white} className="card__icon"
					                size={IconSize.xs}/>}
					type={TypographyType.h4}
				>
					Неограниченный доступ в рабочие пространства
				</Typo>
				<Typo
					color={TypoColor.white}
					icon={<LaptopIcon color={IconColor.white} className="card__icon"
					                  size={IconSize.xs}/>}
					type={TypographyType.h4}>
					Бесконечная продуктивность
				</Typo>
				<Typo
					color={TypoColor.white}
					icon={<CheckIcon color={IconColor.white} className="card__icon"
					                 size={IconSize.xs}/>}
					type={TypographyType.h4}
				>
					И много другого
				</Typo>

				<Separator style={{backgroundColor: 'white', marginTop: 24}}/>

				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<Typo type={TypographyType.h4} color={TypoColor.white}>
						Ранний доступ
					</Typo>

					<Typo
						block
						type={TypographyType.h4}
						color={TypoColor.white}
						style={{textDecoration: 'line-through'}}
					>
						5000 руб / мес
					</Typo>
				</div>

				<Typo
					color={TypoColor.white}
					block
					className="card__price-old"
					type={TypographyType.h3}
					textAlign={TypoTextAlign.end}
					style={{lineHeight: '24px', fontWeight: 500}}
				>
					3900 руб / мес
				</Typo>

				<Button
					disabled={!url}
					element={'a'}
					href={url}
					buttonSize={ButtonSize.xl}
					full
					onClick={() => {
						setPayOffer();
						ym('reachGoal','Переход в yookassa');
					}}
					style={{margin: '13px 0'}}
				>
					{t(Phrase.pay)}
				</Button>
			</div>
		</div>
	);
};

export default SubscriptionCard;
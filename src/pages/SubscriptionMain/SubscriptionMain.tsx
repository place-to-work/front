import React from 'react';
import {observer} from 'mobx-react-lite';
import './SubscriptionMain.scss';
import Typo, {TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import {Form, Formik, FormikProps} from 'formik';
import Button, {ButtonSize} from '@components/primitives/Button';
import SubscriptionCard from '@components/SubscribtionCard/SubscriptionCard';
import Http from '@network/Http/Http';
import t, {Phrase} from '@models/Translate';
import {setPayOffer} from '@utils/payStorage';
import ym from 'react-yandex-metrika';


interface PromoValues {
	promo: '';
}

const initialValues: PromoValues = {
	promo: '',
};


const SubscriptionMainPage: React.FC = () => {
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

	return (<>
		<div className="subscription-page">
			<Typo className="subscription-page__title">
				<Typo
					block
					type={TypographyType.h1}
					textAlign={TypoTextAlign.center}
					className="subscription-page_title"
				>
					{t(Phrase.subscribeVerb)}
				</Typo>
				<Typo
					block
					type={TypographyType.h1}
					textAlign={TypoTextAlign.center}
					className="subscription-page_title"
				>
					{t(Phrase.subscribeNoun)}
				</Typo>
			</Typo>

			<SubscriptionCard/>

			<div className="subscription-page__buttons">
				<Formik<PromoValues>
					initialValues={initialValues}
					render={(formikProps: FormikProps<PromoValues>) => <>
						<Form>
							<Button
								// disabled={!url}
								element={'a'}
								href={url}
								buttonSize={ButtonSize.xl}
								full
								onClick={()=>{
									ym('reachGoal','Переход в yookassa');
									setPayOffer();
								}}
								style={{margin: '13px 0'}}
							>
								{t(Phrase.pay)}
							</Button>

						</Form>
					</>
					} onSubmit={() => {
					}}/>
			</div>
		</div>
	</>
	);
};

export default observer(SubscriptionMainPage);
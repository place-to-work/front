import {observer} from 'mobx-react-lite';
import React from 'react';
import {CurrentTime} from '@models/useless/CurrentTime';
import Typo, {TypoColor, TypographyType} from '@components/primitives/Typo';
import Button, {ButtonColor, ButtonSize} from '@components/primitives/Button';

interface OwnProps {
	currentTime: CurrentTime;
}

const MobxPage: React.FC<OwnProps> = ({currentTime}) => <div>
	{currentTime.time.toISOString()}

	<Typo block type={TypographyType.h1}>Привет</Typo>
	<Typo block type={TypographyType.h2}>Привет</Typo>
	<Typo block type={TypographyType.h3}>Привет</Typo>
	<Typo block type={TypographyType.h4}>Привет</Typo>
	<Typo block type={TypographyType.h5}>Привет</Typo>
	<Typo block type={TypographyType.h6}>Привет</Typo>

	<Typo block type={TypographyType.h1} color={TypoColor.accent}>Привет</Typo>
	<Typo block type={TypographyType.h2} color={TypoColor.accentGrey} >Привет</Typo>
	<Typo block type={TypographyType.h3} color={TypoColor.darkGrey}>Привет</Typo>
	<Typo block type={TypographyType.h4} color={TypoColor.grey}>Привет</Typo>
	<Typo block type={TypographyType.h5} color={TypoColor.blue}>Привет</Typo>
	<Typo block type={TypographyType.h6} color={TypoColor.white}>Привет</Typo>
	<Typo block type={TypographyType.h6} color={TypoColor.black}>Привет</Typo>

	<Typo block type={TypographyType.h1} color={TypoColor.accent}>Привет</Typo>
	<Typo block type={TypographyType.h2} color={TypoColor.accentGrey} >Привет</Typo>
	<Typo block type={TypographyType.h3} color={TypoColor.darkGrey}>Привет</Typo>
	<Typo block type={TypographyType.h4} color={TypoColor.grey}>Привет</Typo>
	<Typo block type={TypographyType.h5} color={TypoColor.blue}>Привет</Typo>
	<Typo block type={TypographyType.h6} color={TypoColor.white}>Привет</Typo>
	<Typo block type={TypographyType.h6} color={TypoColor.black}>Привет</Typo>


	<Button color={ButtonColor.accent}>Кнопка</Button>
	<Button color={ButtonColor.accentGrey}>Кнопка</Button>
	<Button color={ButtonColor.darkGrey}>Кнопка</Button>
	<Button color={ButtonColor.black}>Кнопка</Button>
	<Button color={ButtonColor.white}>Кнопка</Button>
	<Button color={ButtonColor.blue}>Кнопка</Button>

	<Button full color={ButtonColor.accent}>Кнопка full</Button>
	<Button full color={ButtonColor.accentGrey}>Кнопка full</Button>
	<Button full color={ButtonColor.darkGrey}>Кнопка full</Button>
	<Button full color={ButtonColor.black}>Кнопка full</Button>
	<Button full color={ButtonColor.white}>Кнопка full</Button>
	<Button full color={ButtonColor.blue}>Кнопка full</Button>

	<Button color={ButtonColor.accent} buttonSize={ButtonSize.classic}>Кнопка classic</Button>
	<Button color={ButtonColor.accentGrey} buttonSize={ButtonSize.classic}>Кнопка classic</Button>
	<Button color={ButtonColor.darkGrey} buttonSize={ButtonSize.classic}>Кнопка classic</Button>
	<Button color={ButtonColor.black} buttonSize={ButtonSize.classic}>Кнопка classic</Button>
	<Button color={ButtonColor.white} buttonSize={ButtonSize.classic}>Кнопка classic</Button>
	<Button color={ButtonColor.blue} buttonSize={ButtonSize.classic}>Кнопка classic</Button>

	<Button color={ButtonColor.accent} full>
		<Typo block type={TypographyType.h6} color={TypoColor.black}>Привет</Typo>
		<Typo block type={TypographyType.h6} color={TypoColor.white}>Привет</Typo>
		<Typo block type={TypographyType.h6} color={TypoColor.blue}>Привет</Typo>
		<Typo block type={TypographyType.h6} color={TypoColor.grey}>Привет</Typo>
		<Typo block type={TypographyType.h6} color={TypoColor.accentGrey}>Привет</Typo>
		<Typo block type={TypographyType.h6} color={TypoColor.darkGrey}>Привет</Typo>
	</Button>

</div>;

export default observer(MobxPage);

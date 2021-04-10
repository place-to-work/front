import React, {FC} from 'react';
import Typo, {TypographyType} from '@components/primitives/Typo';
import t, {Phrase} from '@models/Translate/Translate';

const Contacts: FC = () =><Typo
	block
	element="a"
	href = "mailto: ask@place-to-work.ru"
	type={TypographyType.h5}
	style={{marginRight: 'calc(50% - 170px)', cursor: 'not-allowed'}}
>
	{t(Phrase.contactUs)}
</Typo>;

export default Contacts;
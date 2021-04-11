import React, {FC} from 'react';
import Typo, {TypoColor, TypographyType} from '@components/primitives/Typo';
import t, {Phrase} from '@models/Translate/Translate';

const Contacts: FC = () =><Typo
	block
	type={TypographyType.h4}
	style={{ cursor: 'not-allowed', whiteSpace:'pre-wrap', justifySelf:'flex-end'}}
>
	{t(Phrase.contactEmail)}
	<Typo element="a" href = "mailto: ask@place-to-work.ru" type={TypographyType.h4} color={TypoColor.accent}> ask@place-to-work.ru</Typo>
</Typo>;

export default Contacts;
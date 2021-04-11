import React, {FC} from 'react';
import {ButtonColor} from '@components/primitives/Button';
import Typo, {TypographyType, TypoTextAlign} from '@components/primitives/Typo';
import t, {Phrase} from '@models/Translate/Translate';
import Tag from '@components/primitives/Tag';
import {useHistory} from 'react-router-dom';

import './InWorkTag.scss';


const InWorkTag: FC = () =>{
	const history = useHistory();

	return <Tag
		className="in-work-tag"
		color={ButtonColor.grey}
		onClick={() => history.push('/in-place')}
	>
		<Typo
			type={TypographyType.h4}
			style={{width: '100%', maxWidth:'200px', whiteSpace:'nowrap'}}
			textAlign={TypoTextAlign.center}

		>
			{t(Phrase.ImInWorkPlace)}
		</Typo>
	</Tag>;
};
export default InWorkTag;
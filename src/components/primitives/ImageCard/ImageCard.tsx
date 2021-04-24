import * as React from 'react';
import './ImageCard.scss';
import {CSSProperties} from 'react';
import cn from 'classnames';
type Props = {
    imageSrc?: string;
    style?: CSSProperties;
    scalable?: boolean;
    full?: boolean;
    rounded?: boolean;
}
const ImageCard: React.FC<Props> = ({imageSrc, style, scalable, full, rounded = true}:Props) => (
	<img className={cn('image', rounded && 'image-rounded'  , scalable && 'image-scalable', full && 'image-full')} src={imageSrc} style={style} alt=""/>
);
export default ImageCard;
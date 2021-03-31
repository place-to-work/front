import * as React from 'react';
import './ImageCard.scss';
import {CSSProperties} from 'react';
type Props = {
    imageSrc?: string;
    style?: CSSProperties;
}
const ImageCard: React.FC<Props> = ({imageSrc, style}:Props) => (
	<img className="image" src={imageSrc} style={style} alt=""/>
);
export default ImageCard;
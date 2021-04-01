import * as React from 'react';
import './ImageCard.scss';
import {CSSProperties} from 'react';
type Props = {
    imageSrc?: string;
    style?: CSSProperties;
    scalable?: boolean;
}
const ImageCard: React.FC<Props> = ({imageSrc, style, scalable}:Props) => (
	<img className={`image ${scalable ? 'image-scalable' : ''}`} src={imageSrc} style={style} alt=""/>
);
export default ImageCard;
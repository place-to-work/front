import * as React from 'react';
import './ImageCard.scss';
type Props = {
    imageSrc?: string;
}
const ImageCard: React.FC<Props> = ({imageSrc}:Props)=><img className="image" src={imageSrc} alt=""/>;
export default ImageCard;
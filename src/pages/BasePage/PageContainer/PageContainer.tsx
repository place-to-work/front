import * as React from 'react';
import './PageContainer.scss';
import {CSSProperties} from 'react';

interface PageContainerProps {
	style?: CSSProperties;
}

const PageContainer: React.FC<PageContainerProps> = ({children, ...rest}) => (
	<div className="page-container" {...rest}>{children}</div>
);

export default PageContainer;
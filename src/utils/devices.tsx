import * as React from 'react';

export const DEVICES = {
	phoneSmall: {
		maxWidth: 500,
		minWidth: 320
	},
	phone: {
		maxWidth: 767,
		minWidth: 320
	},
	tablet: {
		maxWidth: 1024,
		minWidth: 768
	},
	lg: {
		maxWidth: 1200,
		minWidth: 1025
	},
	xlg: {
		maxWidth: 1440,
		minWidth: 1201
	},
	isPhone: (width: number): boolean => width <= DEVICES.phone.maxWidth,
	isPhoneSmall: (width: number): boolean => width <= DEVICES.phoneSmall.maxWidth,
	biggerThanTablet: (width: number): boolean => width >= DEVICES.tablet.minWidth,
	isTablet: (width: number): boolean => width <= DEVICES.tablet.maxWidth && width >= DEVICES.tablet.minWidth,
	isLg: (width: number): boolean => width <= DEVICES.lg.maxWidth && width >= DEVICES.lg.minWidth,
	isXlg: (width: number): boolean => width <= DEVICES.xlg.maxWidth && width >= DEVICES.xlg.minWidth
};

export const useSubscribeToWidth = (hasWidth = false): number => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const unmounted = React.useRef(false);

	React.useEffect(() => {
		if (hasWidth) {
			return;
		}

		const handleResize = (): void => {
			if (unmounted.current) {
				return;
			}

			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return (): void => {
			unmounted.current = true;
			window.removeEventListener('resize', handleResize);
		};
	}, [hasWidth]);

	return width;
};

type WidthContextParams = {
  width: number | null;
};

const initialValue: WidthContextParams = {
	width: null
};

const WidthContext = React.createContext<WidthContextParams>(initialValue);

type WidthProviderProps = {
  children?: React.ReactNode;
};

export const WidthProvider: React.FC<WidthProviderProps> = ({
	children
}: WidthProviderProps) => {
	const width = useSubscribeToWidth();

	return (
		<WidthContext.Provider value={{ width }}>{children}</WidthContext.Provider>
	);
};

export const useWidth = (): {
  width: number;
  isPhone: boolean;
  isTablet: boolean;
  biggerThanTablet: boolean;
  isSmallPhone: boolean;
  isLg: boolean;
  isXlg: boolean;
} => {
	const { width: contextWidth } = React.useContext(WidthContext);

	// Если не удалось получить ширину из контекста, подписываемся в этом компоненте
	const subscribedWidth = useSubscribeToWidth(contextWidth !== null);

	const width = contextWidth !== null ? contextWidth : subscribedWidth;

	const isPhone = DEVICES.isPhone(width);
	const isTablet = DEVICES.isTablet(width);
	const isSmallPhone = DEVICES.isPhoneSmall(width);
	const isLg = DEVICES.isLg(width);
	const isXlg = DEVICES.isXlg(width);
	const biggerThanTablet = DEVICES.biggerThanTablet(width);

	return { width, isPhone, isTablet, isSmallPhone, isLg, isXlg, biggerThanTablet };
};

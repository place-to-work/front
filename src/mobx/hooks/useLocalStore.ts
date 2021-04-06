import * as React from 'react';
import { ILocalStore } from '../interfaces';


export const useLocal = <T>(creator: () => T): T => {
	const local = React.useRef<T | null>(null);

	if (local.current === null) {
		local.current = creator();
	}

	return local.current;
};


export const useLocalStore = <T extends ILocalStore>(creator: () => T): T => {
	const store = useLocal(creator);

	React.useEffect(
		() => (): void => {
			store.destroy();
		},
		[]
	);

	return store;
};

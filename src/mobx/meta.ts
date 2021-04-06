export type Meta = {
    isLoading: boolean;
    isError: boolean;
    isLoaded: boolean;
    message?: string;
};

export const getLoadingStartMeta = (): Meta => ({
	isLoading: true,
	isError: false,
	isLoaded: false
});

export const getLoadedErrorMeta = (message?: string): Meta => ({
	isLoading: false,
	isError: true,
	isLoaded: false,
	message
});

export const getLoadedSuccessMeta = (): Meta => ({
	isLoading: false,
	isError: false,
	isLoaded: true
});

export const getInitialMetaState = (): Meta => ({
	isLoading: false,
	isError: false,
	isLoaded: false
});

export const isInitialMetaState = (meta: Meta): boolean => !meta.isLoading && !meta.isLoaded && !meta.isError;

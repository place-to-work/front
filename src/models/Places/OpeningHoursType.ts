export interface OpeningHoursApiType {
	weekday: number;
	is_opened: boolean;
	close_time: string;
	open_time: string;
}

export interface OpeningHoursInnerType {
	weekday: number;
	isOpened: boolean;
	closeTime: string;
	openTime: string
}

export function convertOpeningHoursApiToInner(apiObject: OpeningHoursApiType): OpeningHoursInnerType {
	return {
		weekday: apiObject.weekday,
		isOpened: apiObject.is_opened,
		closeTime: apiObject.close_time,
		openTime: apiObject.open_time,
	}
}
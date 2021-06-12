import {
	OpeningHoursInnerType,
	OpeningHoursApiType,
	convertOpeningHoursApiToInner,
} from '@models/Places/OpeningHoursType';

export interface PlaceInnerType {
	id: number;
	fullName: string;
	address: string;
	categories: string[];
	averageBill: number;
	occupancy: string;
	wifi: boolean;
	powerSocket: boolean;
	silence: string;
	workPlaces: number;
	light: boolean;
	mainImage: string;
	openingHours: OpeningHoursInnerType;
	images: string[];
}

export interface PlaceApiType {
	id: number;
	full_name: string;
	address: string;
	categories: string[];
	average_bill: number;
	occupancy: string;
	wifi: boolean;
	power_socket: boolean;
	silence: string;
	work_places: number;
	light: boolean;
	main_image: string;
	opening_hours: OpeningHoursApiType;
	images: string[];
}

export function convertPlaceApiToInner(placeObj: PlaceApiType): PlaceInnerType {
	return {
		id: placeObj.id,
		fullName: placeObj.full_name,
		address: placeObj.address,
		categories: placeObj.categories,
		averageBill: placeObj.average_bill,
		occupancy: placeObj.occupancy,
		wifi: placeObj.wifi,
		powerSocket: placeObj.power_socket,
		silence: placeObj.silence,
		workPlaces: placeObj.work_places,
		light: placeObj.light,
		mainImage: placeObj.main_image,
		openingHours: convertOpeningHoursApiToInner(placeObj.opening_hours),
		images: placeObj.images,
	}
}

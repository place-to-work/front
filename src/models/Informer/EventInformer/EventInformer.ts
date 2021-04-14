import Informer from '@models/Informer';

interface PlaceUrl {
	url: string;
	name: string;
}

export interface EventInformer extends Informer {
	optionalFields: {
		places: PlaceUrl[],
	}
}
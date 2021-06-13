import {convertPlaceApiToInner, PlaceApiType, PlaceInnerType} from '@models/Places/PlacesTypes';
import Notification from '@models/Notification';
import Http from '@network/Http';

class Places {
	placesArr: PlaceInnerType[] = [];

	async getPlaces(): Promise<PlaceInnerType[] | null> {
		console.log('start get places');

		// dummy cache
		if (this.placesArr.length !== 0) {
			return this.placesArr;
		}

		const places = await Places.fetchPlaces();
		console.log(`fetched places: ${JSON.stringify(places, null, 4)}`);
		if (places === null) {
			/* no authorization */
			Notification.error('Войдите в сервис, пожалуйста');
			return null;
		}

		this.placesArr = places;
		return this.placesArr;
	}

	private static async fetchPlaces(): Promise<PlaceInnerType[] | null> {
		return Http.fetchGet({path: '/places/'})
			.then((r) => {
				if (!r.ok) {
					return null;
				}
				return r.json() as Promise<PlaceApiType[]>
			})
			.then((data: PlaceApiType[]) => {
				return data.map(convertPlaceApiToInner);
			});
	}

	get arr(): PlaceInnerType[] {
		return this.placesArr;
	}
}

export default new Places();
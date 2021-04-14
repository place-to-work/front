class RelatedPlace {
	constructor(
		public id: number,
		public address: string,
	) {
	}
}

export default class Informer {
	constructor(
		public title: string,
		public text: string,
		public image: string,
		public type: number,
		public relatedPlaces: RelatedPlace[],
	) {
	}
}
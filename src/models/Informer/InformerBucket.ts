import Informer, {ApiInformer} from '@models/Informer';
import Http from '@network/Http';

class InformerBucket {
	informers: Informer[] = [];

	async fetchInformers(): Promise<Informer[]> {
		return Http.getInformers()
			.then((response: Response | null) => {
				console.log(`response ok:\n${response.ok}`);

				if (!response.ok) {
					console.log('informer request is not ok');
					console.log(`inf request status = ${response.status}`);
					console.log(`inf request status text = ${response.statusText}`);
					return this.informers;
				}

				return response.json()
					.then((informer: ApiInformer) => { // должен быть массив
						const arr = [informer];
						this.informers = arr.map((informer) => new Informer(informer));
						return this.informers;
					});
			});
	}
}

export default new InformerBucket();
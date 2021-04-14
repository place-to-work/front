import Informer from '@models/Informer/Informer';
import Http from '@network/Http';

class InformerBucket {
	informerBucket: Informer[] = [];

	async fetchInformers(): Promise<Informer[]> {
		this.informerBucket = await Http.getInformers()
			.then((response: Response | null) => {
				if (response === null) return [];
				if (!response.ok) {
					console.log('informer request is not ok');
					console.log(`inf request status = ${response.status}`);
					console.log(`inf request status text = ${response.statusText}`);
					return [];
				}

				return response.json();
			});

		return this.informerBucket;
	}

	getInformer(): Informer | null {
		if (this.informerBucket.length === 0) {
			this.fetchInformers();
			return null;
		}

		return this.informerBucket.pop();
	}
}

export default new InformerBucket();
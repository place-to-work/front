import Informer from '@models/Informer/Informer';
import Http from '@network/Http';

class InformerBucket {
	informers: Informer[] = [];

	async fetchInformers(): Promise<Informer[]> {
		this.informers = await Http.getInformers()
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

		return this.informers;
	}

	getInformer(): Informer | null {
		if (this.informers.length === 0) {
			this.fetchInformers();
			return null;
		}

		return this.informers.pop();
	}
}

export default new InformerBucket();
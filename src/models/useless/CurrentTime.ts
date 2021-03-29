import {makeAutoObservable} from 'mobx';

export class CurrentTime {
	time = new Date();

	constructor() {
		makeAutoObservable(this);
		setInterval(() => {
			this.time = new Date();
		}, 1000);
	}
}
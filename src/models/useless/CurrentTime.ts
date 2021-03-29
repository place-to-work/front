import {makeAutoObservable} from 'mobx';

export class CurrentTime {
	time = new Date();

	constructor() {
		makeAutoObservable(this);
		setInterval(() => {
			this.time = new Date();
			console.log(`new time = ${this.time.toISOString()}`);
		}, 1000);
	}
}
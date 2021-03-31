import {makeAutoObservable} from 'mobx';

export class CurrentTime {

    constructor() {
        makeAutoObservable(this);
    }
}
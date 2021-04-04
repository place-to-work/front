import {action, makeObservable, observable, runInAction} from 'mobx';

import {UserCategory, UserType} from './types';
import Http from "@network/Http/Http";
import {normalizeUserData} from "./normalize";
import {UserApiType} from "./apiTypes";
import {ILocalStore} from "../../interfaces";
import {LoginValues} from "@pages/LoginPage/LoginPage";
import {getInitialMetaState, Meta} from "../../meta";
import {SignupValues} from "@pages/SignupPage/SignupPage";


const getInitialData = (): UserType => ({
    id: -1,
    email: '',
    name:'',
    type:UserCategory.client,
    joinDate: new Date(),
    hasSubscribe: false,
    subscribeDate: new Date(),
    place: null,
    avatar: null,
});

export default class UserStore implements ILocalStore {

    user: UserType = getInitialData();
    meta: Meta = getInitialMetaState();


    constructor() {
        makeObservable(this, {
            user: observable,
            meta: observable,
            fetchUser: action.bound,
            loginUser: action.bound,
            regUser: action.bound,
        });

    }

    async loginUser(values: LoginValues): Promise<void> {
        console.log('login 1')

        const data = await Http.fetchPost({
            path: '/users/login/',
            body: JSON.stringify(values),
        }).then((resp)=>resp.json())
        console.log('login 2')
        this.user = normalizeUserData(data);

        console.log('login 3', this.user)
        runInAction(() => {

        });
    }

    async regUser(values: SignupValues): Promise<void> {
        console.log('login 1')


        const data = await Http.fetchPost({
            path: '/users/',
            body: JSON.stringify(values),
        }).then((resp)=>resp.json())

        if(data){
            this.user = normalizeUserData(data);
        }


        console.log('login 3', this.user)

    }


    async fetchUser(onSuccess?:()=>void, onError?: ()=>void): Promise<UserType|null> {
        console.log('fetch user 1')
        console.log(this.user.id)

            console.log('fetch user 2')
        const data = await Http.getCurrentUser()

        runInAction(()=>{
            if(data){
                console.log('fetch user ', data)
                this.user = normalizeUserData(data);
                console.log('fetched',this.user.hasSubscribe)
                // onSuccess();

            } else{
                // onError();

            }
        })
        return this.user.id === -1 ? null : this.user;


    }




    destroy(): void {
        // this.user = getInitialData();
    }
}

import {LoginValues} from '@pages/LoginPage/LoginPage';
import Message from '@models/Notification';
import t, {Phrase} from '@models/Translate';

type Nullable<T> = T | null;

type FetchRequestProps = {
	path?: string,
	method: string,
	body?: any,
}

class Http {
	static GET_CSRF_NAME = 'csrftoken';
	static STORE_CSRF_NAME = 'csrftoken';
	static PUT_CSRF_NAME = 'X-CSRFToken';
	static ACCESS_TOKEN = 'Authorization'
	static ACCESS_TOKEN_BEARER = 'Bearer'
	constructor(public serverUrl) {
	}

	fetchRequest({
		path = '/',
		method = 'GET',
		body = null,
	}: FetchRequestProps): Promise<Nullable<Response>> {
		const req: RequestInit = {
			method,
			mode: 'cors',
			credentials: 'include',
			body,
		};

		// const cookieCsrf = getCookie(Http.GET_CSRF_NAME);
		const cookieCsrf = localStorage.getItem(Http.STORE_CSRF_NAME);
		const accessToken = localStorage.getItem('access_token');
		console.log('test1', cookieCsrf);
		const customHeaders = {};
		if (cookieCsrf) {
			console.log('test2');
			customHeaders[Http.PUT_CSRF_NAME] = cookieCsrf;
		}

		if(accessToken){
			console.log('access put');
			customHeaders[Http.ACCESS_TOKEN] = `${Http.ACCESS_TOKEN_BEARER} ${accessToken}`;
		}


		if (body !== null) {
			customHeaders['Content-Type'] = 'application/json';
		}
		req.headers = customHeaders;

		return fetch(`${this.serverUrl}${path}`, req)
			.then((response) => {
				console.log(`ok response = ${JSON.stringify(response, null, 4)}`);
				return response.ok ? retCSRFToken(response) : response;
			})
			.catch((reason: TypeError) => {
				// Сюда может попать только TypedError
				// Внутри будет ошибка сети:
				// - нет связи
				// - корсы
				// - мб днс не резолвится
				console.log(`fetch error: ${reason.message}`);
				Message.error(t(Phrase.networkError));
				return null;
			});
	}

	fetchGet({path}): Promise<Nullable<Response>> {
		return this.fetchRequest({
			method: 'GET',
			path,
		});
	}

	fetchPost({path, body}): Promise<Nullable<Response>> {
		return this.fetchRequest({
			method: 'POST',
			path,
			body,
		});
	}

	fetchPut({path, body}): Promise<Nullable<Response>> {
		return this.fetchRequest({
			method: 'PUT',
			path,
			body,
		});
	}

	fetchDelete({path, body}): Promise<Nullable<Response>> {
		return this.fetchRequest({
			method: 'DELETE',
			path,
			body,
		});
	}

	getCurrentUser(): any {
		// if(!getCookie(Http.GET_CSRF_NAME)){
		// 	return null
		// }
		return this.fetchGet({path: '/users/'}).then((response) => response.ok ? response.json() : null);
	}

	login(loginValues: LoginValues): Promise<Nullable<Response>> {
		return this.fetchPost({
			path: '/users/login/',
			body: JSON.stringify(loginValues),
		});
	}

	getInformers(): Promise<Nullable<Response>> {
		return this.fetchGet({
			path: '/informers',
		});
	}
}

export function getCookie(name: string): string | undefined {
	const matches = document.cookie.match(new RegExp(
		'(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/\+])/g, '\\$1') + '=([^;]*)',
	));
	console.log('matches', document.cookie.toLocaleLowerCase());
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function retCSRFToken(response: Response): Response {
	console.log('token setting');
	const token = getCookie(Http.GET_CSRF_NAME);
	if (token) {
		localStorage.setItem(Http.STORE_CSRF_NAME, token);
	}
	return response;
}

export default new Http(BASE_URL);
import User from '@models/User';

type FetchRequestProps = {
	path?: string,
	method: string,
	body?: any,
}

class Http {
	constructor(public serverUrl = 'https://place-to-work.online/api/v1') {}

	static GET_CSRF_NAME = 'csrftoken';
	static STORE_CSRF_NAME = 'csrftoken';
	static PUT_CSRF_NAME = 'X-CSRFToken';

	fetchRequest({
		path = '/',
		method = 'GET',
		body = null,
	}: FetchRequestProps): Promise<Response> {
		const req: RequestInit = {
			method,
			mode: 'cors',
			credentials: 'include',
			body,
		};

		const cookieCsrf = getCookie(Http.GET_CSRF_NAME);
		console.log('test1', cookieCsrf)
		if (cookieCsrf) {
			console.log('test2')
			req.headers = {
				[Http.PUT_CSRF_NAME]: cookieCsrf,
			}
		}

		if (body !== null) {
			req.headers = {
				'Content-Type': 'application/json',
			};
		}

		return fetch(`${this.serverUrl}${path}`, req)
			.then(retCSRFToken);
	}

	fetchGet({path}): Promise<Response> {
		return this.fetchRequest({
			method: 'GET',
			path,
		});
	}

	fetchPost({path, body}): Promise<Response> {
		return this.fetchRequest({
			method: 'POST',
			path,
			body,
		});
	}

	fetchPut({path, body}): Promise<Response> {
		return this.fetchRequest({
			method: 'PUT',
			path,
			body,
		});
	}

	fetchDelete({path, body}): Promise<Response> {
		return this.fetchRequest({
			method: 'DELETE',
			path,
			body,
		});
	}

	getCurrentUser(): Promise<Response> {
		return this.fetchGet({path: '/users/'});
	}
}

function getCookie(name) {

	const matches = document.cookie.match(new RegExp(
		'(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
	));
	console.log('matches', document.cookie.toLocaleLowerCase())
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function retCSRFToken(response: Response): Response {
	const token = getCookie(Http.GET_CSRF_NAME);
	if (token) {
		localStorage.setItem(Http.STORE_CSRF_NAME, token);
	}
	return response;
}

export default new Http();
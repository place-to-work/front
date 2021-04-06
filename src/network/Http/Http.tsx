type FetchRequestProps = {
	path?: string,
	method: string,
	body?: any,
}

class Http {
	static GET_CSRF_NAME = 'csrftoken';
	static STORE_CSRF_NAME = 'csrftoken';
	static PUT_CSRF_NAME = 'X-CSRFToken';

	constructor(public serverUrl = 'https://place-to-work.online/api/v1') {
	}

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

		// const cookieCsrf = getCookie(Http.GET_CSRF_NAME);
		const cookieCsrf = localStorage.getItem(Http.STORE_CSRF_NAME);
		console.log('test1', cookieCsrf);
		const customHeaders = {};
		if (cookieCsrf) {
			console.log('test2');
			customHeaders[Http.PUT_CSRF_NAME] = cookieCsrf;
		}


		if (body !== null) {
			customHeaders['Content-Type'] = 'application/json';
		}
		req.headers = customHeaders;

		return fetch(`${this.serverUrl}${path}`, req).then((response) => response.ok ? retCSRFToken(response) : response);
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

	getCurrentUser(): any {
		// if(!getCookie(Http.GET_CSRF_NAME)){
		// 	return null
		// }
		return this.fetchGet({path: '/users/'}).then((response) => response.ok ? response.json() : null);
	}
}

export function getCookie(name: string): string | undefined {
	const matches = document.cookie.match(new RegExp(
		'(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/\+^])/g, '\\$1') + '=([^;]*)',
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

export default new Http();
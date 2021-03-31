
type FetchRequestProps = {
	path?: string,
	method: string,
	body?: any,
}

class Http {
	constructor(private serverUrl = 'https://place-to-work.online/api/v1') {}

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

		const cookieCsrf = Http.getCookie(Http.GET_CSRF_NAME);
		if (cookieCsrf) {
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
			.then((response) => Http.retCSRFToken(response));
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

	static getCookie(name) {
		const matches = document.cookie.match(new RegExp(
			'(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	static retCSRFToken(response: Response): Response {
		console.log('test', document.cookie)
		const token = this.getCookie(this.GET_CSRF_NAME);
		if (token) {
			localStorage.setItem(this.STORE_CSRF_NAME, token);
		}

		return response;
	}
}

export default new Http();
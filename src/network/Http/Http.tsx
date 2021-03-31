
type FetchRequestProps = {
	path?: string,
	method: string,
	body?: any,
}

interface ErrorableResponse extends Response  {
	error: boolean;
}

class Http {
	constructor(private serverUrl = 'https://place-to-work.online') {}

	static CSRF_NAME = 'X-CSRFToken';

	fetchRequest({
		path = '/',
		method = 'GET',
		body = null,
	}: FetchRequestProps): Promise<ErrorableResponse> {
		const req: RequestInit = {
			method,
			mode: 'cors',
			credentials: 'include',
			body,
		};

		if (body !== null) {
			req.headers = {
				'Content-Type': 'application/json',
				[Http.CSRF_NAME]: localStorage.getItem(Http.CSRF_NAME),
			}
		}

		return fetch(`${this.serverUrl}${path}`, req)
			.then((response) => Http.retCSRFToken(response))
			.then((response) => Http.checkForError(response));
	}

	async fetchGet({path}) {
		return this.fetchRequest({
			method: 'GET',
			path,
		});
	}

	async fetchPost({path, body}) {
		return await this.fetchRequest({
			method: 'POST',
			path,
			body,
		});
	}

	async fetchPut({path, body}) {
		return await this.fetchRequest({
			method: 'PUT',
			path,
			body,
		});
	}

	async fetchDelete({path, body}) {
		return await this.fetchRequest({
			method: 'DELETE',
			path,
			body,
		});
	}

	static retCSRFToken(response: Response): Response {
		const token = response.headers.get(this.CSRF_NAME);
		if (token) {
			localStorage.setItem(this.CSRF_NAME, token);
		}

		return response;
	}

	static checkForError(response: Response): ErrorableResponse {
		return {...response, error: response.status !== 200};
	}
}

export default new Http();
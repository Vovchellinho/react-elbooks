import type {
	TEndpoints,
	TGetParams,
	TMethod,
	TSearchParams,
	TGetVolumeParams,
	APIResponse,
	TData,
} from "./types";
import { endpoints } from "./types";


class API {
	private host: string;
	private key: string;

	constructor() {
		this.host = process.env.REACT_APP_API_HOST ?? '';
		this.key = process.env.REACT_APP_API_KEY ?? '';
	}

	private async request<T extends keyof TEndpoints>(path: T, params?: TGetParams[T], method: TMethod = 'GET', body?: any): Promise<APIResponse<TData<T>>> {
		const getParams = (): string => {
			if (path === 'search-volumes' && params) {
				const par = params as TSearchParams;
				return `q=${par.q}${par.terms && `+${par.terms}:${par.q}`}${par.filter && `&filter=${par.filter}`}${par.langRestrict && `&langRestrict=${par.langRestrict}`}`;
			};
			if (path === 'get-volume' && params) {
				const par = params as TGetVolumeParams;
				return `${par.id}`;
			};
			return '';
		};
		
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const config: RequestInit = {
			method,
			headers,
			body: body ? JSON.stringify(body) : null,
		};

		const parsedParams = method === 'GET' ? getParams() : '';
		const endpoint = endpoints[path];
		try {
			const response = await fetch(`${this.host}/${endpoint}${parsedParams !== '' && ('?' + parsedParams)}&key=${this.key}`, config);
			if (!response.ok) {
				return {success: false, error: 'Network response was not ok'};
			}
			const result = await response.json() as TData<T>;
			return {success: true, data: result};
		} catch (error) {
			return {success: false, error: 'There was a problem with your fetch operation'};
		}
	}

	public GET<T extends keyof TEndpoints>(path: T, params: TGetParams[T]): Promise<APIResponse<TData<T>>> {
		return this.request(path, params);
	}

	public POST<T  extends keyof TEndpoints>(path: T, data: any): Promise<APIResponse<TData<T>>> {
		return this.request(path, undefined, 'POST', data);
	}
};

export default API;
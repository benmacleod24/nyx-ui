import { RESOURCE_NAME } from "../config/consts";

export default async function post<T = any>(endpoint: string, body?: T) {
	try {
		const response = await fetch(`https://${RESOURCE_NAME}/${endpoint}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(body),
		}).then((r) => r.json());

		return response as T;
	} catch (e) {
		throw e;
	}
}

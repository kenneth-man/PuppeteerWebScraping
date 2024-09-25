import { baseUrl } from "../constants/strings"

export const fetchApi = async (
	path: string,
	method: string = "GET",
	init: RequestInit = {},
) => {
	if (!init.headers) init.headers = {}

	const response = await fetch(
		new URL(path, baseUrl),
		{
			...init,
			method,
			headers: {
				...init.headers,
				"content-type": "application/json",
			}
		}
	)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return await response.json()
}

export const postApi = (
	path: string,
	init: RequestInit = {},
) => fetchApi(path, "POST", init)

export const putApi = (
	path: string,
	init: RequestInit = {},
) => fetchApi(path, "PUT", init)

export const patchApi = (
	path: string,
	init: RequestInit = {},
) => fetchApi(path, "PATCH", init)

export const deleteApi = (
	path: string,
	init: RequestInit = {},
) => fetchApi(path, "DELETE", init)
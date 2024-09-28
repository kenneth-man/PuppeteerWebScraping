import { backendOrigin } from "@kenneth/shared/constants/strings"

const fetchApi = async (
	path: string,
	method: string = "GET",
	init: RequestInit = {}
) => {
	if (!init.headers) init.headers = {}

	const response = await fetch(
		new URL(path, backendOrigin),
		{
			...init,
			method,
			credentials: "include",
			headers: {
				...init.headers,
				"content-type": "application/json"
			}
		}
	)

	console.log(response)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return await response.json()
}

export default fetchApi
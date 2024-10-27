const fetchApi = async (
	path: string,
	method: string = "GET",
	init: RequestInit = {}
) => {
	if (!init.headers) init.headers = {}

	const response = await fetch(
		new URL(
			path,
			import.meta.env.VITE_BACKEND_DOMAIN
		),
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

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return await response.json()
}

export default fetchApi
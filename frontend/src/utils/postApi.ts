import { fetchApi } from "."

const postApi = (
	path: string,
	credentials: RequestCredentials,
	data: Object = {},
) => fetchApi(path, credentials, "POST", { body: JSON.stringify(data)})

export default postApi
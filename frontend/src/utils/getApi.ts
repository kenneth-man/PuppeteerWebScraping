import { fetchApi } from "."

const getApi = (
	path: string,
	credentials: RequestCredentials
) => fetchApi(path, credentials)

export default getApi
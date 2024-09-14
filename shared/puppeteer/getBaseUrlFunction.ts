import { TBookMakerBaseUrls } from "../models/types";

const getBaseUrlFunction = (
	bookmakerBaseUrls: TBookMakerBaseUrls,
	url: string
) => {
	const keys = Array.from(bookmakerBaseUrls.keys())

	for (let i = 0; i < keys.length; ++i) {
		if (url.includes(keys[i])) {
			return bookmakerBaseUrls.get(keys[i])
		}
	}

	return undefined
}

export default getBaseUrlFunction
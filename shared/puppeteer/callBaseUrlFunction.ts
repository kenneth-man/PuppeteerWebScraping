import { Page } from "puppeteer"
import { TBookMakerBaseUrls } from "../models/types"
import { getBaseUrlFunction } from "."

const callBaseUrlFunction = async (
	page: Page,
	url: string,
	urls: TBookMakerBaseUrls
) => {
	const func = urls.get(url) || getBaseUrlFunction(urls, url)
	
	try {
		if (func) {
			return await func(page)
		}
	} catch(e) {
		if (e.message) {
			throw new Error(e.message)
		}
		throw new Error("Unknown error occured")
	}
}

export default callBaseUrlFunction
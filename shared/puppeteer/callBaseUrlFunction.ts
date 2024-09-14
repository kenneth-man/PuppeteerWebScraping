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
		throw new Error(
			"Error occured whilst calling the associated function... " +
			String(e)
		)
	}
}

export default callBaseUrlFunction
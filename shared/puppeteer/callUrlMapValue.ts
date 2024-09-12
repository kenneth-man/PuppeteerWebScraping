import { Page } from 'puppeteer'
import { TBookMakerUrls } from '../models/types'

const callUrlMapValue = async (
	page: Page,
	url: string,
	urls: TBookMakerUrls
) => {
	const func = urls.get(url)
	
	try {
		if (func) {
			await func(page)
		}
	} catch(e) {
		throw new Error(
			"Error occured whilst calling the associated function... " +
			String(e)
		)
	}
}

export default callUrlMapValue
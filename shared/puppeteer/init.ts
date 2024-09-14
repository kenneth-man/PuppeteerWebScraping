import puppeteer from "puppeteer";
import { defaultHeight, defaultWidth } from "../constants/numbers";
import { TBookMaker, TBookMakerBaseUrls } from "../models/types"
import { IInitConfig, IInitPage } from "../models/interfaces";
import delay from "../utils/delay";
import { getBaseUrlFunction } from ".";

const init = async (
	bookmaker: TBookMaker,
	bookmakerBaseUrls: TBookMakerBaseUrls,
	apiUrl?: string,
	config?: IInitConfig
): Promise<IInitPage> => {
	// 'eventUrl' argument
	let url: string

	if (apiUrl) {
		url = apiUrl
	} else {
		if (process.argv.length !== 3) {
			throw new Error("Please provide a single Url argument")
		}

		url = process.argv[process.argv.length - 1]
	}

	if (!(getBaseUrlFunction(bookmakerBaseUrls, url))) {
		throw new Error(
			"This Url is not supported for... " +
			bookmaker
		)
	}

	const browser = await puppeteer.launch({
		headless: config?.headless ?? false,
		browser: config?.browser || "chrome"
	})

	const page = await browser.newPage()

	await page.goto(url)

	// make sure page fully loads; without this, sometimes data wouldn't be retrieved
	await page.waitForNetworkIdle({ idleTime: 1000 })
	await delay(1000)

	await page.setViewport({
		width: config?.width || defaultWidth,
		height: config?.height || defaultHeight
	})

	return { page, browser, url }
}

export default init
import puppeteer from "puppeteer";
import { defaultHeight, defaultWidth } from "../constants/numbers";
import { TBookMaker, TBookMakerUrls } from "../models/types"
import { IInitConfig, IInitPage } from "../models/interfaces";
import delay from '../utils/delay';

const init = async (
	bookmaker: TBookMaker,
	bookmakerUrls: TBookMakerUrls,
	config?: IInitConfig
): Promise<IInitPage> => {
	if (process.argv.length !== 3) {
		throw new Error("Please provide a single Url argument")
	}

	const url = process.argv[process.argv.length - 1]

	if (!bookmakerUrls.get(url)) {
		throw new Error(
			"This script doesn't support the Url that was provided for... " +
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
	await page.waitForNetworkIdle({ idleTime: 2000 })
	await delay(2000)

	await page.setViewport({
		width: config?.width || defaultWidth,
		height: config?.height || defaultHeight
	})

	return { page, browser, url }
}

export default init
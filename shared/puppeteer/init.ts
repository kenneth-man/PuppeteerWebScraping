import puppeteer from "puppeteer";
import { defaultHeight, defaultWidth } from "../constants/numbers";
import { TBookMaker, TBookMakerUrls } from "../models/types"
import { IInitConfig, IInitPage } from "../models/interfaces";

const init = async (
	bookmaker: TBookMaker,
	bookmakerUrls: TBookMakerUrls,
	config?: IInitConfig
): Promise<IInitPage> => {
	if (process.argv.length !== 3) {
		throw new Error("Please provide an event Url")
	}

	const url = process.argv[process.argv.length - 1]

	if (!bookmakerUrls.get(url)) {
		throw new Error(
			"This script doesn't support the Url that was provided for... " +
			bookmaker
		)
	}

	const browser = await puppeteer.launch({
		headless: config?.headless || true,
		browser: config?.browser || "chrome"
	})

	const page = await browser.newPage()

	await page.goto(url)

	await page.setViewport({
		width: config?.width || defaultWidth,
		height: config?.height || defaultHeight
	})

	return { page, browser, url }
}

export default init
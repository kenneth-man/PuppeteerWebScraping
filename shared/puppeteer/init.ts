import puppeteer from "puppeteer";
import { z } from "zod"
import { defaultHeight, defaultWidth } from "../constants/numbers";
import { TBookMaker } from "../models/types"
import { IInitConfig, IInitPage } from "../models/interfaces";

const init = async (
	bookmaker: TBookMaker,
	config?: IInitConfig
): Promise<IInitPage> => {
	if (process.argv.length !== 3) {
		throw new Error("Please provide an event URL")
	}

	const url = process.argv[process.argv.length - 1]
	const isValidUrl = z.string().url().safeParse(url)

	if (!isValidUrl.success) {
		throw new Error(
			"Please provide a valid URL of a horse racing event page on " +
			bookmaker
		)
	}

	const browser = await puppeteer.launch({
		headless: config?.headless || false,
		browser: config?.browser || "chrome"
	})

	const page = await browser.newPage()

	await page.goto(url)

	await page.setViewport({
		width: config?.width || defaultWidth,
		height: config?.height || defaultHeight
	})

	return { page, browser }
}

export default init
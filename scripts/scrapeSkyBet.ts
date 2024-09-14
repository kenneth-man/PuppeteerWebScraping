import { skyBetUrls } from "@kenneth/shared/constants/maps";
import { ISkyBet } from "@kenneth/shared/models/interfaces";
import { callBaseUrlFunction, init } from "@kenneth/shared/puppeteer"

(async () => {
	console.log("Scraping site...")

	const { browser, page, url } = await init("SkyBet", skyBetUrls)

	const data: ISkyBet = await callBaseUrlFunction(page, url, skyBetUrls)

	console.log("Object Data:", data)
	console.log("JSON data:", JSON.stringify(data))

	await browser.close();
})()
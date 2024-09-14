import { skyBetUrls } from '@kenneth/shared/constants/maps';
import { ISkyBet } from '@kenneth/shared/models/interfaces';
import { callUrlMapValue, init } from "@kenneth/shared/puppeteer"

(async () => {
	const { browser, page, url } = await init("SkyBet", skyBetUrls)

	const data: ISkyBet = await callUrlMapValue(page, url, skyBetUrls)

	console.log(data)
	console.log(data.info.length)
	console.log(JSON.stringify(data))

	await browser.close();
})()
import { skyBetUrls } from '@kenneth/shared/constants/maps';
import { callUrlMapValue, init } from "@kenneth/shared/puppeteer"

(async () => {
	const { browser, page, url } = await init("SkyBet", skyBetUrls)

	await callUrlMapValue(page, url, skyBetUrls)

	await browser.close();
})()
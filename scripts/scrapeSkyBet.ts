import { init } from "@kenneth/shared/puppeteer"

(async () => {
	const { browser, page } = await init("SkyBet")

	await browser.close();
})()
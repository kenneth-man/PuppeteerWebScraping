import { Page } from 'puppeteer'

const getNextRacesHorseOdds = async (page: Page) => {
	const oddsContainerSelector = '[data-testid="market-racecard"]'

	await page.waitForSelector(oddsContainerSelector, { visible: true });

	const oddsContainer = await page.$(oddsContainerSelector)

	console.log("Found container element:", !!oddsContainer)
	
	const test = await page.evaluate((container) => {
		if (container?.children) {
			return container.firstChild?.textContent
		}
	}, oddsContainer)

	console.log("Scrape success:", !!test)
	console.log(test)

	// return in JSON format
}

export default getNextRacesHorseOdds
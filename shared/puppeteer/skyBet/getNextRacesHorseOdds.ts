import { Page } from 'puppeteer'

const getNextRacesHorseOdds = async (page: Page) => {
	const oddsContainerSelector = '[data-testid="market-racecard"]'

	await page.waitForSelector(oddsContainerSelector, { visible: true });

	const oddsContainer = await page.$(oddsContainerSelector)

	console.log(!!oddsContainer)
	
	const test = await page.evaluate((container) => {
		if (container?.children) {
			return container.firstChild?.textContent
		}
	}, oddsContainer)

	console.log(test)
}

export default getNextRacesHorseOdds
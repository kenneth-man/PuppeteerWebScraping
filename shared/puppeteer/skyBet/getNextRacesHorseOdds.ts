import { Page, TimeoutError } from "puppeteer"
import { ISkyBet, ISkyBetHorseInfo } from "../../models/interfaces";

const getNextRacesHorseOdds = async (page: Page) => {
	const raceCardContainerSelector = '[data-testid="market-racecard"]'

	try {
		// timeout default is 30 seconds
		await page.waitForSelector(raceCardContainerSelector, { visible: true });
	} catch (e) {
		if (e instanceof TimeoutError) {
			throw new Error("Could not find the page selector and timed out")
		}
		throw new Error()
	}

	const raceCardContainer = await page.$(raceCardContainerSelector)
	
	const skyBetData = await page.evaluate((container) => {
		let data: ISkyBet = {
			title: "Couldn't find the racecard title",
			info: []
		};

		if (container) {
			if (container.firstChild?.textContent) {
				data.title = container.firstChild.textContent
			}
			
			const infoContainer: Element[] = []

			Array.from(container.children).forEach((element, index) => {
				// first child of a race card container, is the title element
				if (index !== 0 && element.children.length == 1) {
					infoContainer.push(element.children[0])
				}
			})

			// element indexes for the information we need
			const ownersIndex = 2
			const oddsIndex = 3
			const statsIndex = 4

			for (let i = 0; i < infoContainer.length; ++i) {
				let info: ISkyBetHorseInfo = {
					team: {},
					stats: {},
					odds: ""
				}

				for (let j = 0; j < infoContainer[i]?.children.length; ++j) {
					// the information we are interested in (e.g. ISkyBetHorse properties)
					// start from the 3rd child element onwards
					const element = infoContainer[i]?.children[j]

					if (element) {
						switch (j) {
							case ownersIndex: {
								const horseName = element.firstChild?.textContent
								const jockey = element.lastChild?.firstChild?.textContent
								const trainer = element.lastChild?.lastChild?.textContent
								info.team = {
									horseName: horseName ?? info.team.horseName,
									jockey: jockey ?? info.team.jockey,
									trainer: trainer ?? info.team.trainer
								}
								break;
							}
							case oddsIndex: {
								const odds = element.firstChild?.firstChild?.
									firstChild?.textContent
								if (odds) {
									info.odds = odds
								}
								break;
							}
							case statsIndex: {
								const statsContainer = element.firstChild?.lastChild

								if (!statsContainer || !(statsContainer instanceof Element)) {
									break;
								}

								const statsDivs = statsContainer.children
								const formIndex = 0
								const ageIndex = 2
								const weightIndex = 4

								info.stats = {
									form: statsDivs[formIndex]?.textContent ?? info.stats.form,
									age: statsDivs[ageIndex]?.textContent ?? info.stats.age,
									weight: statsDivs[weightIndex]?.textContent ??
										info.stats.weight
								}				
								break;
							}
							default: break;
						}
					}
				}

				data.info.push(info)
			}
		}

		return data
	}, raceCardContainer)

	return skyBetData
}

export default getNextRacesHorseOdds
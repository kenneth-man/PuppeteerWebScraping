import { TBookMakerBaseUrls } from "../models/types";
import { getNextRacesHorseOdds } from "../puppeteer/skyBet";
import { skyBetNextRacesHorse } from "./strings";

// creating a url to function mapping, because each event page can have different
// html elements, attributes, dom layout...
// therefore will need to call a specific function, based on the url
export const skyBetUrls: TBookMakerBaseUrls = new Map<string, Function>([
	[skyBetNextRacesHorse, getNextRacesHorseOdds]
])
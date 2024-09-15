import { TBookMakerBaseUrls } from "../models/types";
import { getNextRacesHorseOdds } from "../puppeteer/skyBet";
import { skyBetNextRacesHorse } from "./strings";

// - Creating a url to function mapping, because each event page can have different html elements,
// attributes, dom layout... which will require a specific function to traverse the dom elements

// - If the url has dynamic arguments such as an 'id', the function 'getBaseUrlFunction'
// will check if the url includes a base url here; if true, then it returns the function to be
// called
export const skyBetUrls: TBookMakerBaseUrls = new Map<string, Function>([
	[skyBetNextRacesHorse, getNextRacesHorseOdds]
	// other base url to function pairs...
])
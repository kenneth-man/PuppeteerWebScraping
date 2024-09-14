import { TBookMakerBaseUrls } from "../models/types";
import { getNextRacesHorseOdds } from "../puppeteer/skyBet";
import { skyBetNextRacesHorse } from "./strings";

// - creating a url to function mapping, because each event page can have different html elements,
// attributes, dom layout... which will require a specific function to traverse the dom elements

// - if the url has dynamic arguments such as a 'id', the function 'getBaseUrlFunction'
// will check if the url includes a base url here; if true, then it returns the function value
export const skyBetUrls: TBookMakerBaseUrls = new Map<string, Function>([
	[skyBetNextRacesHorse, getNextRacesHorseOdds]
	// other base url to function pairs...
])
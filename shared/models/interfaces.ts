import { SupportedBrowser, Browser, Page } from "puppeteer";

export interface IInitConfig {
	headless?: boolean;
	browser?: SupportedBrowser;
	height?: number;
	width?: number;
}

export interface IInitPage {
	page: Page;
	browser: Browser;
	url: string;
}

export interface ISkyBet {
	title: string;
	info: ISkyBetHorseInfo[];
}

export interface ISkyBetHorseInfo {
	team: {
		horseName?: string;
		jockey?: string;
		trainer?: string;
	}
	stats: {
		form?: string;
		age?: string;
		weight?: string;
	}
	odds?: string;
}
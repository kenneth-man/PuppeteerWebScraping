import { SupportedBrowser, Browser, Page } from "puppeteer";

export interface IInitConfig {
	headless?: boolean;
	browser?: SupportedBrowser
	height?: number;
	width?: number;
}

export interface IInitPage {
	page: Page;
	browser: Browser;
}
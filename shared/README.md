# Shared
- ### The purpose of this directory is to share common functionality with `rootDir/scripts` and `rootDir/backend` in order to not repeat code
	- ### via `NPM Workspaces`

- ### E.g.
	- ### `rootDir/shared/puppeteer/init.ts` is used to setup puppeteer and validate that the url passed in, is able to be scraped
		- ### `init(...)` is called in
			- ### `rootDir/scripts/scrapeSkyBet.ts`
			- ### `rootDir/backend/handlers/odds/getOdds.ts`
		- ### If there were more endpoints and/or scripts, `init(...)` would also be reused inside them aswell
# Scripts to scrape odds for an event from the following
- ### https://m.skybet.com/

## Run a script
### 1.
- ### If you haven't already installed dependencies in root
	- ### In the project root directory
```
npm i
```

### 2.
- ### Make sure you're in the `scripts` directory
```
cd scripts
```

### 3.
- ### Execute `npx tsx` with the script file
	- ### E.g.
		- ### Scripts require the Url of a bookmaker site page, which is passed as a command argument
```
npx tsx scrapeSkyBet.ts https://m.skybet.com/horse-racing
```
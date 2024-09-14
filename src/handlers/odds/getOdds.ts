import { Response } from "express"
import { skyBetUrls } from "@kenneth/shared/constants/maps";
import { ISkyBet } from "@kenneth/shared/models/interfaces";
import { callBaseUrlFunction, init } from "@kenneth/shared/puppeteer"
import { TGetOdds } from "../../models/types";
import { IRequestBody } from "../../models/interfaces";
import { tryCatch } from "../../utils";

const getOdds = async (
	req: IRequestBody<TGetOdds>,
	res: Response
) => {
	await tryCatch(async () => {
		const url = req.body?.eventUrl

		if (!url) {
			throw new Error("Missing the required field 'eventUrl' in a request body")
		}
	
		const { browser, page } = await init("SkyBet", skyBetUrls, url)
	
		const data: ISkyBet = await callBaseUrlFunction(page, url, skyBetUrls)
	
		await browser.close();
	
		res
			.status(200)
			.json(data)
	}, res)
}

export default getOdds
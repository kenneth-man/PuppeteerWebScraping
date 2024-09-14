import { Response } from "express"
import { skyBetUrls } from "@kenneth/shared/constants/maps";
import { ISkyBet } from "@kenneth/shared/models/interfaces";
import { callBaseUrlFunction, init } from "@kenneth/shared/puppeteer"
import { TGetOdds } from "../../models/types";
import { IRequestBody } from "../../models/interfaces";
import { throwError, tryCatch } from "../../utils";

const getOdds = async (
	req: IRequestBody<TGetOdds>,
	res: Response
) => {
	// default; 'init' is also used in scripts, so cannot pass in 'res'
	res.status(400)

	await tryCatch(
		async () => {
			const url = req.body?.eventUrl

			if (!url) {
				throwError(res, 400, "Missing the required field 'eventUrl' in a request body")
			}
		
			const { browser, page } = await init("SkyBet", skyBetUrls, url)
		
			const data: ISkyBet = await callBaseUrlFunction(page, url, skyBetUrls)
		
			await browser.close();
		
			res
				.status(200)
				.json(data)
		},
		res
	)
}

export default getOdds
import { Response } from "express"

const tryCatch = async (
	callback: Function,
	res: Response
) => {
	// default status; 'init' function in 'shared/puppeteer/init.ts' is also used in scripts,
	// so cannot pass in 'res' as an argument
	res.status(500)

	try {
		await callback()
	} catch(e) {
		if (e.message) {
			res.json({ error: e.message })
			return
		}

		res
			.status(500)
			.json({ error: "Unknown error occured" })
	}
}

export default tryCatch
import { Response } from "express"

const tryCatch = async (callback: Function, res: Response) => {
	try {
		await callback()
	} catch(e) {
		if (e.message) {
			res
				.status(400)
				.json({ error: e.message })
			return
		}

		res
			.status(500)
			.json({ error: "Unknown error occured" })
	}
}

export default tryCatch
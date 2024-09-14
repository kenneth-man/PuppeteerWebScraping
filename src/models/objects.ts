import { z } from "zod"

export const OgetOdds = z.object({
	eventUrl: z.string()
})
import { z } from "zod"

export const OGetOdds = z.object({
	eventUrl: z.string()
})

export const OSignUp = z.object({
	username: z.string(),
	password: z.string(),
	email: z.string().email()
})

export const OSignIn = z.object({
	password: z.string(),
	email: z.string().email()
})

export const OUser = z.object({
	id: z.number(),
	username: z.string(),
	password: z.string(),
	email: z.string().email()
})
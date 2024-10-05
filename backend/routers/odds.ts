import express from "express"
import { getOdds } from "../handlers/odds"

const router = express.Router()

router
	.post("/", getOdds)
	// the '/odds' base endpoint will scrape 'SkyBet' by default
	// could add more routes below/path params in the future to target specific bookmakers

export default router
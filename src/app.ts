import express from "express"
import rateLimit from "express-rate-limit"
import helmet from "helmet"
import cors from "cors"
import { requestsLimit, requestsLimitTimeout } from './constants/numbers'
import { oddsRouter } from './routers'

const app = express()

// Enable CORS; allow requests from any domain (e.g. localhost:3000)
app.use(cors())

// adding Security HTTP Headers to req and res
app.use(helmet())

// limit requests from the same IP address
app.use(
	"/api",
	rateLimit({
		limit: requestsLimit,
		windowMs: requestsLimitTimeout,
		message: "Too many requests from this IP, please try again later"
	})
)

// convert request body to JSON
app.use(express.json())

app.use("/signup", () => {})
app.use("/signin", () => {})
app.use("/odds", oddsRouter)

export default app
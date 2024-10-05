import express from "express"
import helmet from "helmet"
import cors from "cors"
import { authRouter, oddsRouter } from "./routers"
import { protect } from "./utils"
import { frontendOrigin } from "@kenneth/shared/constants/strings"

const app = express()

// allow requests from frontend origin with credentials (jwt sent in cookie)
app.use(cors({
	origin: frontendOrigin,
	credentials: true
}))

// adding Security HTTP Headers to req and res
app.use(helmet())

// convert request body to JSON
app.use(express.json())

app.use("/auth", authRouter)
app.use("/odds", protect, oddsRouter)

export default app
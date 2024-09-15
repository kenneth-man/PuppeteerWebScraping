import express from "express"
import helmet from "helmet"
import cors from "cors"
import { authRouter, oddsRouter } from "./routers"
import { protect } from "./utils"

const app = express()

// Enable CORS; allow requests from any domain (e.g. localhost:3000)
app.use(cors())

// adding Security HTTP Headers to req and res
app.use(helmet())

// convert request body to JSON
app.use(express.json())

app.use("/auth", authRouter)
app.use("/odds", protect, oddsRouter)

export default app
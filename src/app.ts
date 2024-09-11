import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

// Enable CORS; allow requests from any domain (e.g. localhost:3000)
app.use(cors())

// adding Security HTTP Headers to req and res
app.use(helmet())

// limit requests from the same IP address
app.use(
	'/api',
	rateLimit({
		limit: 10000, // 10,000 requests
		windowMs: 60000, // 1 minute
		message: 'Too many requests from this IP, please try again later'
	})
)

export default app

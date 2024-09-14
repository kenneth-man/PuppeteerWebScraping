import express from "express"
import { signIn, signUp } from '../handlers/auth'

const router = express.Router()

router
	.post("/signUp", signUp)
	.post("/signIn", signIn)

export default router
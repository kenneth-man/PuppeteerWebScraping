import express from "express"
import { checkSignedIn, signIn, signUp } from "../handlers/auth"

const router = express.Router()

router
	.post("/signUp", signUp)
	.post("/signIn", signIn)
	.post("/checkSignedIn", checkSignedIn)

export default router
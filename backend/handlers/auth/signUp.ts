import { Response } from "express"
import { z } from "zod"
import { IRequestBody } from "../../models/interfaces"
import { TPreAccountUser, TSignUp, TUser } from "../../models/types"
import { client } from "../../server"
import { addRow, getUserByEmail, hashPassword, signToken, throwError, tryCatch } from "../../utils"
import { jwtTokenName } from "../../constants/strings"

const signUp = async (
	req: IRequestBody<TSignUp>,
	res: Response
) => {
	await tryCatch(
		async () => {
			if (!req.body?.email || !req.body?.password || !req.body?.username) {
				throwError(res, 400,
					"Request must contain a body with the following fields: " + 
					"email, password, username"
				)
			}
		
			const { email, password, username } = req.body
			const emailLowerCase = email.toLowerCase()
			const passwordLength = 8
		
			if (password.length < passwordLength) {
				throwError(res, 400,
					`Passwords must be at least ${passwordLength} characters or greater`
				)
			}
		
			const emailValidation = z.string().email().safeParse(emailLowerCase)
		
			if (!emailValidation.success) {
				throwError(res, 400, "Please provide a valid email address")
			}
		
			const existingEmail = await client
				.query(`SELECT * FROM users WHERE email = $1`, [emailLowerCase])

			if (existingEmail.rowCount > 0) {
				throwError(res, 400,
					"A user with this email already exists. " + 
					"Please sign up with a different email address"
				)
			}

			let newUser: TPreAccountUser = {
				username,
				email: emailLowerCase
			}

			const passwordHash = hashPassword(password)
			newUser.password = passwordHash

			await addRow(client, newUser, "users")

			const user: TUser = await getUserByEmail(res, emailLowerCase)

			delete user.password

			const token = signToken(user)

			res
				.status(200)
				.cookie(jwtTokenName, token, { httpOnly: true })
				.json({...user});
		},
		res
	)
}

export default signUp
import { Response } from "express"
import { z } from "zod"
import { IRequestBody } from '../../models/interfaces'
import { TPreAccountUser, TSignUp, TUser } from '../../models/types'
import { client } from '../../server'
import { addRow, hashPassword, signToken, tryCatch } from '../../utils'

const signUp = async (
	req: IRequestBody<TSignUp>,
	res: Response
) => {
	await tryCatch(
		async () => {
			if (!req.body?.email || !req.body?.password || !req.body?.username) {
				throw new Error("Request must contain a body with the following fields: " + 
					"email, password, username")
			}
		
			const { email, password, username } = req.body
			const passwordLength = 8
		
			if (password.length < passwordLength) {
				throw new Error(`Passwords must be at least ${passwordLength} characters or greater`)
			}
		
			const emailValidation = z.string().email().safeParse(email)
		
			if (!emailValidation.success) {
				throw new Error("Please provide a valid email address")
			}
		
			const existingEmail = await client
				.query(`SELECT * FROM users WHERE email = $1`, [email])

			if (existingEmail.rowCount > 0) {
				throw new Error("A user with this email already exists. " + 
					"Please sign up with a different email address")
			}

			let newUser: TPreAccountUser = {
				username,
				email
			}

			const passwordHash = hashPassword(password)
			newUser.password = passwordHash

			await addRow(client, newUser, "users")

			const userRows = await client
				.query(`SELECT * FROM users WHERE email = $1`, [email])

			if (userRows.rowCount === 0) {
				throw new Error("New user was not created in the database")
			}

			console.log("userRows", userRows)
			console.log("userRows length", userRows.rows.length)
			console.log("userRows index 0", userRows.rows[0])
			const user: TUser = userRows.rows[0]

			delete user.password

			const token = signToken(newUser)

			res
				.status(200)
				.cookie("token", token)
				.json({...user, "token": token});
		}, res
	)
}

export default signUp
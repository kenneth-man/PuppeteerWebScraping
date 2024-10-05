import { Response } from "express"
import { IRequestBody } from "../../models/interfaces"
import { TSignIn, TUser } from "../../models/types"
import { checkPassword, getUserByEmail, signToken, throwError, tryCatch } from "../../utils"
import { jwtTokenName } from "../../constants/strings"

const signIn = async (
	req: IRequestBody<TSignIn>,
	res: Response
) => {
	await tryCatch(
		async () => {
			if (!req.body?.email || !req.body?.password) {
				throwError(res, 400,
					"Request must contain a body with the following fields: " + 
					"email, password"
				)
			}
		
			const { email, password } = req.body
			const emailLowerCase = email.toLowerCase()

			const user: TUser = await getUserByEmail(res, emailLowerCase)

			if (!checkPassword(user.password, password)) {
				throwError(res, 401, "Incorrect password")
			}

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

export default signIn
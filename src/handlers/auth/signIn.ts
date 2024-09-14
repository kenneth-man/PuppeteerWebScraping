import { Response } from "express"
import { IRequestBody } from "../../models/interfaces"
import { TSignIn, TUser } from "../../models/types"
import { checkPassword, getUserByEmail, signToken, throwError, tryCatch } from "../../utils"

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

			const user: TUser = await getUserByEmail(res, email)

			if (!checkPassword(user.password, password)) {
				throwError(res, 401, "Incorrect password")
			}

			delete user.password

			const token = signToken(user)

			res
				.status(200)
				.cookie("token", token)
				.json({...user, "token": token});
		},
		res
	)
}

export default signIn
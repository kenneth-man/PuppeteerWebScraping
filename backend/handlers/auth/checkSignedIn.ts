import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import config from "config"
import { throwError, tryCatch } from "../../utils"
import { jwtTokenName } from "../../constants/strings"

const checkSignedIn = async (
	req: Request,
	res: Response
) => {
	await tryCatch(
		async () => {
			let token: string
			const cookie = req.headers?.cookie

			if (cookie) {
				token = cookie.split(jwtTokenName + "=")[1]
			} else {
				res
					.status(200)
					.json({ signedInUser: "" });
				return
			}

			let decodedToken: jwt.JwtPayload

			try {
				decodedToken = <jwt.JwtPayload>jwt.verify(
					token,
					config.get("VARS.jwt_key")
				);
			} catch (e) {
				if (
					e instanceof Error &&
					e.name === "TokenExpiredError" &&
					e.message === "jwt expired"
				) {
					res
						.status(200)
						.json({ signedInUser: "" });
					return
				}
			}

			if (decodedToken?.email) {
				res
					.status(200)
					.json({ signedInUser: decodedToken.email });
				return
			}

			throwError(res, 500, "Something went wrong. An email wasn't found")
		},
		res
	)
}

export default checkSignedIn
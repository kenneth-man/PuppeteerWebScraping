import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import config from "config"
import tryCatch from "./tryCatch"
import throwError from "./throwError"
import getUserByEmail from "./getUserByEmail"

const protect = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	await tryCatch(
		async () => {
			let token: string
			const headers = req.headers;

			if (headers.authorization && headers.authorization.startsWith("Bearer")) {
				token = headers.authorization.split(" ")[1];
			}

			if (!token) {
				throwError(res, 401, "You are not logged in. Please log in to gain access")
			}

			const decodedToken = <jwt.JwtPayload>jwt.verify(
				token,
				config.get("SECRETS.jwt_key")
			);

			if (decodedToken?.email) {
				try {
					await getUserByEmail(res, String(decodedToken?.email))
				} catch {
					throwError(res, 404, "The user belonging to this token no longer exists")
				}
			} else {
				throwError(res, 500, "Something went wrong. An email wasn't found")
			}

			next()
		},
		res
	)
}

export default protect
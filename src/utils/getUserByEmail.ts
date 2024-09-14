import { Response } from "express"
import { OUser } from "../models/objects"
import { TUser } from "../models/types"
import { client } from "../server"
import { throwError } from "."

const getUserByEmail = async (
	res: Response,
	email: string
): Promise<TUser> => {
	const userRows = await client
		.query(`SELECT * FROM users WHERE email = $1`, [email])

	if (userRows.rowCount === 0) {
		throwError(res, 404, "User cannot be found")
	}

	if (!OUser.safeParse(userRows.rows[0]).success) {
		throwError(res, 502, "Data returned from database does not match 'User' schema")
	}

	const user: TUser = userRows.rows[0]

	return user
}

export default getUserByEmail
import { CookieOptions } from "express"
import { sharedRootDomainName } from "@kenneth/shared/constants/strings"

// "Set-Cookie" HTTP Response Header attribute options
const setCookieOptions = (): CookieOptions => {
	let cookieOptions: CookieOptions

	if (
		process?.env?.NODE_ENV &&
		process.env.NODE_ENV === "production"
	) {
		cookieOptions = {
			domain: sharedRootDomainName,
			httpOnly: true,
			secure: true,
			sameSite: "none"
		}
	} else {
		cookieOptions = {
			httpOnly: true
		}
	}

	return cookieOptions
}

export default setCookieOptions
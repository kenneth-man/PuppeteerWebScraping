import { test, expect } from "@jest/globals"
import checkPassword from "../checkPassword";

test("Correctly compares decrypted password hash and password", () => {
	const matchedPassword = checkPassword("non matching hash", "abc123")
	expect(matchedPassword).toBeFalsy()
})
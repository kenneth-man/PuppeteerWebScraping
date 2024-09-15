import { expect, test } from "@jest/globals"
import hashPassword from "../hashPassword";
import { passwordMock } from "../../constants/testConstants";

test("Returns hashed password", () => {
	const hash = hashPassword(passwordMock)
	expect(hash).not.toEqual(passwordMock)
})
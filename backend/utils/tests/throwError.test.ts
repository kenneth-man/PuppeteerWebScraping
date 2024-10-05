import { expect, test } from "@jest/globals"
import { expressResMock } from "../../constants/testConstants";
import throwError from "../throwError";

test("Throws error", () => {
	const errorMessage = "This is the error message"
	try {
		throwError(expressResMock, 400, errorMessage)
	} catch(e) {
		expect(e.message).toEqual(errorMessage)
	}
})
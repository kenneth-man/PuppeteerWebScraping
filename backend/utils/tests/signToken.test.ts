import { expect, test, jest } from "@jest/globals"
import signToken from "../signToken";
import { userMock } from "../../constants/testConstants";

jest.mock("config", () => ({
	get: () => "12345"
}))

test("Returns token", () => {
	const token = signToken(userMock)
	expect(token)
})
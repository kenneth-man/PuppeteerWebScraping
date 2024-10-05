import { expect, test, jest } from "@jest/globals"
import { expressResMock } from "../../constants/testConstants";
import tryCatch from "../tryCatch"

test("Executes callback", async () => {
	const func = jest.fn()
	await tryCatch(func , expressResMock)
	expect(func).toHaveBeenCalled()
})
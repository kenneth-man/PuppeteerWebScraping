import { expect, test } from "@jest/globals"
import addRow from "../addRow";
import {
	emailMock,
	passwordMock,
	pgClientMock,
	usernameMock
} from "../../constants/testConstants";

test("Constructs valid postgres query", async () => {
	await addRow(
		pgClientMock,
		{
			username: usernameMock,
			password: passwordMock,
			email: emailMock
		},
		"users"
	)
	expect(pgClientMock.query).toHaveBeenCalledWith(`
		INSERT INTO users (username, password, email)
		VALUES ('${usernameMock}', '${passwordMock}', '${emailMock}')
	`)
})
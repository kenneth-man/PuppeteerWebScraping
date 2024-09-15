import { jest } from "@jest/globals"
import { TPreAccountUser } from "../models/types"

export const pgClientMock: any = {
	query: jest.fn()
}

export const expressReqMock: any = {
	headers: {
		authorization: "Bearer TOKEN"
	}
}

export const expressResMock: any = {
	status: jest.fn(),
	json: jest.fn()
}

export const usernameMock = "Kenneth Man"

export const passwordMock = "qwerty"

export const emailMock = "kenneth.waikin.man@outlook.com"

export const userMock: TPreAccountUser = {
    id: 1,
    username: usernameMock,
    password: passwordMock,
    email: emailMock
}
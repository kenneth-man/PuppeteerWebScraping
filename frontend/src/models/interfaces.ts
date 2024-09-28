import { Dispatch, SetStateAction } from "react"

export interface ISignUp {
	email: string
	username: string
	password: string
}

export interface ISignIn {
	email: string
	password: string
}

export interface ISignInUpFormSetStates {
	setEmail: Dispatch<SetStateAction<string>>
	setUsername?: Dispatch<SetStateAction<string>>
	setPassword: Dispatch<SetStateAction<string>>
	setLoading: Dispatch<SetStateAction<boolean>>
	setError: Dispatch<SetStateAction<string>>
	setSignedInUser: Dispatch<SetStateAction<string>>
}
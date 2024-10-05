import { Dispatch, FormEvent, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom";
import { TSignInUp } from "../models/types";
import { ISignIn, ISignUp, ISignInUpFormSetStates } from "../models/interfaces";
import postApi from "./postApi";

const signInUpSubmit = async (
	event: FormEvent,
	navigate: NavigateFunction,
	type: TSignInUp,
	formData: ISignUp | ISignIn,
	formSetStates: ISignInUpFormSetStates
) => {
	const {
		setEmail,
		setPassword,
		setLoading,
		setError,
		setSignedInUser
	} = formSetStates

	event.preventDefault()
	setLoading(true)

	try {
		//TODO:
			// move 'TUser' type into shared, then use type in both front and back e.g. const userData: TUser...
			// move 'tryCatch' function into shared and use in front and back
			// type the .json responses in back, and move them to shared for validation in front
			// signed in users shouldn't see sign up or sign in pages
			// better error messages in red
		const userData = await postApi("auth/" + type, formData)
		setSignedInUser(userData.email)
		navigate("/")
	} catch (e) {
		setEmail("")
		formSetStates?.setUsername && formSetStates.setUsername("")
		setPassword("")
		console.log(e)
		setError(String(e))
		setLoading(false)
	}
}

export default signInUpSubmit
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
		setLoggedInUsername
	} = formSetStates

	event.preventDefault()
	setLoading(true)

	try {
		//TODO: move 'TUser' type into shared, then use type in both front and back
		const userData = await postApi("auth/" + type, "include", formData)
		setLoggedInUsername(userData.email)
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
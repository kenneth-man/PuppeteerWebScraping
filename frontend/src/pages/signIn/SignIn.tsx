import React, { useState, Dispatch, SetStateAction, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Box, Page } from "../../components"
import "./SignIn.css"
import { signInUpSubmit } from "../../utils";
import { Context } from "../../context";

const SignIn = () => {
	const { setSignedInUser } = useContext(Context)
	const navigate = useNavigate()
	const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] = useState("")
	const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] = useState("")
	const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
	const [error, setError]: [string, Dispatch<SetStateAction<string>>] = useState("")

	return (
		<Page
			className="ctr"
		>
			<h1>Sign In</h1>
			{
				loading ? (
					<h2>Signing in, please wait</h2>
				) : (
					<form
						onSubmit={(event) => signInUpSubmit(
							event,
							navigate,
							"signIn",
							{
								email,
								password
							},
							{
								setEmail,
								setPassword,
								setLoading,
								setError,
								setSignedInUser
							}
						)}
						className="col space-y-2"
					>
						{error && ( <h1 style={{ color: "red" }}>{error}</h1>)}
						<Box
							type="flex"
							flexDirection="col"
						>
							<label>Email:</label>
							<input	
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</Box>
						<Box
							type="flex"
							flexDirection="col"
						>
							<label>Password:</label>
							<input
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								type="password"
							/>
						</Box>
						<button
							type="submit"
						>
							Sign In
						</button>
					</form>
				)
			}
		</Page>
	)
}

export default SignIn
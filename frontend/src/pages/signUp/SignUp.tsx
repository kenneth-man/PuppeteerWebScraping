import React, { useState, Dispatch, SetStateAction, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { Box, Page } from "../../components"
import "./SignUp.css"
import { signInUpSubmit } from "../../utils";
import { Context } from "../../context";

const SignUp = () => {
	const { setLoggedInUsername } = useContext(Context)
	const navigate = useNavigate()
	const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] = useState("")
	const [username, setUsername]: [string, Dispatch<SetStateAction<string>>] = useState("")
	const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] = useState("")
	const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
	const [error, setError]: [string, Dispatch<SetStateAction<string>>] = useState("")

	return (
		<Page
			className="ctr"
		>
			<h1>Sign Up</h1>
			{
				loading ? (
					<h2>Signing up, please wait</h2>
				) : (
					<form
						onSubmit={(event) => signInUpSubmit(
							event,
							navigate,
							"signUp",
							{
								email,
								username,
								password
							},
							{
								setEmail,
								setUsername,
								setPassword,
								setLoading,
								setError,
								setLoggedInUsername
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
							<label>Username:</label>
							<input
								value={username}
								onChange={(event) => setUsername(event.target.value)}
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
							Sign Up
						</button>
					</form>
				)
			}
		</Page>
	)
}

export default SignUp
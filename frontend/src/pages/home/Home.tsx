import { Link } from "react-router-dom"
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { Context } from "../../context"
import { Box, Page } from "../../components"
import { oddsRoute, signInRoute, signUpRoute } from "../../constants/strings"
import { getApi, postApi } from "../../utils"
import "./Home.css"

const Home = () => {
	const { signedInUser, setSignedInUser } = useContext(Context)
	const [testingBackendAPIData, setTestingBackendAPIData]: [
		string,
		Dispatch<SetStateAction<string>>
	] = useState<string>("")

	const testBackendAPI = async () => {
		try {
			const res = await getApi("/testing")
			setTestingBackendAPIData(res.testOutput)
		} catch {
			setTestingBackendAPIData("Error whilst fetching...")
		}
	}

	useEffect(() => {
		(async () => {
			try {
				const res = await postApi("/auth/checkSignedIn")
				setSignedInUser(res.signedInUser)
			} catch(e) {
				console.log(e)
			}
		})()
	}, [])

	return (
		<Page
			title="Puppeteer Web Scraping"
			className="ctr"
		>
			<h1>Hello {signedInUser || "there"}!</h1>
			<Box
				type="flex"
				flexDirection="col"
			>
				{
					!signedInUser ? (
						<>
							<Link to={signUpRoute}>Sign Up</Link>
							<Link to={signInRoute}>Sign In</Link>
						</>
					) : (
						<>
							<Link to={oddsRoute}>Get Odds</Link>
						</>
					)
				}
				<Box
					type="flex"
					justifyContent="center"
					className="testing"
				>
					<p>Test the Backend API: {testingBackendAPIData || "Nothing returned..."}</p>
					<button
						onClick={testBackendAPI}
					>
						Send Test Request
					</button>
				</Box>
			</Box>
		</Page>
	)
}

export default Home
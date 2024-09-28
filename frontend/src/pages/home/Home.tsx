import { Link } from "react-router-dom"
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { Context } from "../../context"
import { Box, Page } from "../../components"
import { oddsRoute, signInRoute, signUpRoute } from "../../constants/strings"
import "./Home.css"
import { postApi } from "../../utils"

const Home = () => {
	const { signedInUser, setSignedInUser } = useContext(Context)

	useEffect(() => {
		(async () => {
			try {
				const res = await postApi("/auth/checkSignedIn")
				console.log(res)
				setSignedInUser(res.signedInUser)
			} catch(e) {
				console.log(e)
			}
		})()
	}, [])

	return (
		<Page
			className="ctr"
		>
			<h1>Hello {signedInUser || "there"}!</h1>
			<Box
				type="flex"
				flexDirection="col"
			>
				{
					!signedInUser && (
						<>
							<Link to={signUpRoute}>Sign Up</Link>
							<Link to={signInRoute}>Sign In</Link>
						</>
					)
				}
				<Link to={oddsRoute}>Get Odds</Link>
			</Box>
		</Page>
	)
}

export default Home
import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { Context } from "../../context"
import { Box, Page } from "../../components"
import { oddsRoute, signInRoute, signUpRoute } from "../../constants/strings"
import "./Home.css"

const Home = () => {
	const { loggedInUsername } = useContext(Context)
	return (
		<Page
			className="ctr"
		>
			<h1>Hello {loggedInUsername || "there"}!</h1>
			<Box
				type="flex"
				flexDirection="col"
			>
				{
					!loggedInUsername && (
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
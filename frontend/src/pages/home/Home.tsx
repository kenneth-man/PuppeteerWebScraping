import React from "react"
import { Box, Page } from "../../components"
import "./Home.css"

const Home = () => {
	return (
		<Page>
			<h1>Home</h1>

			<Box
				type="flex"
				flexDirection="col"
			>
				<h1>One</h1>
				<h1>Two</h1>
				<h1>Three</h1>
				<h1>Four</h1>
				<h1>Five</h1>
				<h1>Six</h1>
			</Box>
		</Page>
	)
}

export default Home
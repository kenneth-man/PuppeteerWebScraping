import React from "react"
import IPageProps from "./IPageProps"
import "./Page.css"
import { Box } from ".."
import PuppeteerLogo from "../../../../res/puppeteerLogo.png"
import { Link } from "react-router-dom"
import { homeRoute } from "../../constants/strings"

const Page = ({
	title,
	children,
	className,
	styles
}: IPageProps) => (
	<div
		className={`page ${className}`}
		style={styles}
	>
		<Box
			type="flex"
			className="pageHeader"
		>
			<Link
				to={homeRoute}
				className="pageTitleWrapper space-x-2"
			>
				<img
					src={PuppeteerLogo}
					alt="Puppeteer Logo"
					className="pageLogo"
				/>
				<h1
					className="pageTitle"
				>
					{title}
				</h1>
			</Link>
		</Box>
		{children}
	</div>
)

export default Page
import React from "react"
import { IPageProps } from "./IPageProps"
import "./Page.css"
import { Box } from ".."
import PuppeteerLogo from "../../../../res/puppeteerLogo.png"

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
		</Box>
		{children}
	</div>
)

export default Page
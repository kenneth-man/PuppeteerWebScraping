import React from "react"
import IPageProps from "./IPageProps"
import "./Page.css"

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
		<h1
			className="title"
		>
			{title}
		</h1>
		<div
			className="content fh"
		>
			{children}
		</div>
	</div>
)

export default Page
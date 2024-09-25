import React from "react"
import { IPageProps } from "./IPageProps"
import "./Page.css"

const Page = ({
	children,
	className,
	styles
}: IPageProps) => (
	<div
		className={`page ${className}`}
		style={styles}
	>
		{children}
	</div>
)

export default Page
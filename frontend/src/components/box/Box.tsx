import React from "react"
import { boxProps } from "./IBoxProps"
import "./Box.css"

const Box = ({
	children,
	flexDirection = "row",
	justifyContent = "space-evenly",
	alignItems = "center",
	type = "flex",
	styles,
	...props
}: boxProps) => {
	let gridTemplate = {}

	if ("cols" in props) {
		gridTemplate = {
			gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
			gridTemplateRows: `repeat(${props.rows}, 1fr)`,
			justifyItems: props.justifyItems,
			alignContent: props.alignContent
		}
	}
	
	return (
		<div
			className={`space-y-4 ${type} ${flexDirection}`}
			style={{
				justifyContent,
				alignItems,
				...gridTemplate,
				...styles
			}}
		>
			{children}
		</div>
	)
}

export default Box
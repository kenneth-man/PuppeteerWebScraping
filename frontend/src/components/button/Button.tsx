import React from "react"
import IButtonProps from "./IButtonProps"
import "./Button.css"

const Button = ({
	children,
	onClick,
	type,
	className,
	styles
}: IButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`button ${className}`}
			style={styles}
		>
			{children}
		</button>
	)
}

export default Button
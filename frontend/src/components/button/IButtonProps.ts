import { MouseEventHandler, ReactNode } from "react";
import { TButtonType } from "../../models/types";

interface IButtonProps {
	children: ReactNode
	type: TButtonType
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	styles?: object
}

export default IButtonProps
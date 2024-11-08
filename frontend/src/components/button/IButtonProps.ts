import { MouseEventHandler, ReactNode } from "react";
import { TButtonType } from "../../models/types";

interface IButtonProps {
	children: ReactNode
	onClick: MouseEventHandler<HTMLButtonElement>
	type: TButtonType
	className?: string
	styles?: object
}

export default IButtonProps
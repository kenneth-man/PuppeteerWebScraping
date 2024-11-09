import { ReactNode } from "react"

interface ILinkProps {
	reactRouter: boolean
	url: string
	children: ReactNode
	className?: string
	styles?: object
}

export default ILinkProps
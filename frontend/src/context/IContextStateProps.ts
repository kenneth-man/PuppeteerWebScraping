import { Dispatch, SetStateAction } from "react"

export interface IContextStateProps {
	loggedInUsername: string
	setLoggedInUsername: Dispatch<SetStateAction<string>>
}
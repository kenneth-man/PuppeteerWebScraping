import { Dispatch, SetStateAction } from "react"

export interface IContextStateProps {
	signedInUser: string
	setSignedInUser: Dispatch<SetStateAction<string>>
}
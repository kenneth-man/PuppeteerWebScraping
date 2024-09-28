import React from "react"
import { Link } from "react-router-dom";
import { Page } from "../../components"
import { IFourZeroProps } from "./IFourZeroProps"
import {
	fourZeroOneRoute,
	fourZeroThreeRoute,
	homeRoute,
	signInRoute,
	signUpRoute
} from "../../constants/strings";

const FourZero = ({
	errorCode,
	errorMessage
}: IFourZeroProps) => {
	return (
		<Page
			className="ctr"
		>
			<h1>{errorCode.split("/")[1]}</h1>
			<h2>{errorMessage}</h2>
			{
				errorCode === fourZeroOneRoute && (
					<>
						<h2>Click a link below to Sign in or Sign Up</h2>
						<Link to={signInRoute}>Sign In...</Link>
						<Link to={signUpRoute}>Sign Up...</Link>
					</>
				)
			}
			{
				errorCode === fourZeroThreeRoute && (
					<>
						<h2>Click the link below to return Home</h2>
						<Link to={homeRoute}>Return Home...</Link>
					</>
				)
			}
		</Page>
	)
}

export default FourZero
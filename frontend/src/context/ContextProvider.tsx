import React, { Dispatch, SetStateAction, useState } from "react"
import { Context } from "."
import { Routes, BrowserRouter, Route } from "react-router-dom"
import { FourZero, Home, Odds, SignIn, SignUp } from "../pages"
import {
	fourZeroFourRoute,
	fourZeroOneRoute,
	fourZeroThreeRoute,
	homeRoute,
	oddsRoute,
	signInRoute,
	signUpRoute
} from "../constants/strings"

const ContextProvider = () => {
	const [signedInUser, setSignedInUser]: [
		string,
		Dispatch<SetStateAction<string>>
	] = useState("")

	return (
		<div className="app">
			<Context.Provider
				value={{
					signedInUser,
					setSignedInUser
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route
							path={homeRoute}
							Component={Home}
						/>
						<Route
							path={signInRoute}
							Component={SignIn}
						/>
						<Route
							path={signUpRoute}
							Component={SignUp}
						/>
						<Route
							path={oddsRoute}
							Component={Odds}
						/>
						<Route
							path={fourZeroOneRoute}
							Component={() => (
								<FourZero
									errorCode={fourZeroOneRoute}
									errorMessage={
										"You aren't currently signed in and are missing" +
										" the required authentication"
									}
								/>
							)}
						/>
						<Route
							path={fourZeroThreeRoute}
							Component={() => (
								<FourZero
									errorCode={fourZeroThreeRoute}
									errorMessage={
										"Your account doesn't have the required authorization"
									}
								/>
							)}
						/>
						<Route
							path={fourZeroFourRoute}
							Component={FourZero}
						/>
					</Routes>
				</BrowserRouter>
			</Context.Provider>
		</div>
	)
}

export default ContextProvider
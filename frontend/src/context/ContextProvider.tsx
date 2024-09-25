import React from "react"
import { Context } from "."
import { Routes, BrowserRouter, Route } from "react-router-dom"
import { FourZeroFour, Home } from "../pages"
import {
	fourZeroFourRoute,
	homeRoute
} from "../constants/strings"

const ContextProvider = () => {
	// (async () => {
	// 	const res = await getApi("/wildCard/test/1")
	// 	console.log(res)
	// })()

	return (
		<div className="app">
			<Context.Provider
				value={{}}
			>
				<BrowserRouter>
					<Routes>
						<Route
							path={homeRoute}
							Component={Home}
						/>
						<Route
							path={fourZeroFourRoute}
							Component={FourZeroFour}
						/>
					</Routes>
				</BrowserRouter>
			</Context.Provider>
		</div>
	)
}

export default ContextProvider
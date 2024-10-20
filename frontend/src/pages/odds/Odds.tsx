import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { skyBetNextRacesHorse } from "@kenneth/shared/constants/strings";
import { Page } from "../../components"
import { postApi } from "../../utils"
import { fourZeroThreeRoute } from "../../constants/strings";
import "./Odds.css"

const Odds = () => {
	const navigate = useNavigate()
	const [odds, setOdds]: [string, Dispatch<SetStateAction<string>>] = useState("")
	const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
	const [error, setError]: [string, Dispatch<SetStateAction<string>>] = useState("")

	const getOddsSkyBetNextRacesHorse = async () => {
		try {
			setLoading(true)
			const res = await postApi("/odds", { eventUrl: skyBetNextRacesHorse })
			setOdds(JSON.stringify(res))
		} catch(e) {
			console.log(e)
			navigate(fourZeroThreeRoute)
		}
		setLoading(false)
	}

	return (
		<Page
			className="ctr space-y-2"
		>
			<h1>Odds</h1>
			{error && ( <h1 style={{ color: "red" }}>{error}</h1>)}
			{
				loading ? (
					<h2>Scraping site, please wait</h2>
				) : (
					<>
						<button
							onClick={getOddsSkyBetNextRacesHorse}
						>
							Get Odds for {skyBetNextRacesHorse}
						</button>
					</>
				)
			}
			{
				odds && (
					<>
						<h2>Odds Data:</h2>
						<p>{odds}</p>
					</>
				)
			}
		</Page>
	)
}

export default Odds
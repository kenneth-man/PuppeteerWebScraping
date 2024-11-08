import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { skyBetNextRacesHorse } from "@kenneth/shared/constants/strings";
import { Page } from "../../components"
import { postApi } from "../../utils"
import { fourZeroThreeRoute } from "../../constants/strings";
import "./Odds.css"
import Button from "../../components/button/Button";

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
			title="Odds"
			className="ctr space-y-2"
		>
			{error && ( <h1 style={{ color: "red" }}>{error}</h1>)}
			{
				loading ? (
					<h2>Scraping site, please wait</h2>
				) : (
					<Button
						onClick={getOddsSkyBetNextRacesHorse}
						type="button"
					>
						Get Odds for {skyBetNextRacesHorse}
					</Button>
				)
			}
			{
				odds && (
					<>
						<h2>Data:</h2>
						<p className="oddsData">{odds}</p>
					</>
				)
			}
		</Page>
	)
}

export default Odds
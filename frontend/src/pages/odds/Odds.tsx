import React, { Dispatch, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom";
import { skyBetNextRacesHorse } from "@kenneth/shared/constants/strings";
import { ISkyBet, ISkyBetHorseInfo } from "@kenneth/shared/models/interfaces";
import { Page, Button, GridList, SkyBetHorseInfoItem } from "../../components"
import { postApi } from "../../utils"
import { fourZeroThreeRoute } from "../../constants/strings";
import "./Odds.css"

const Odds = () => {
	const navigate = useNavigate()
	const [odds, setOdds]: [ISkyBet, Dispatch<SetStateAction<ISkyBet>>] = useState(undefined)
	const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
	const [error, setError]: [string, Dispatch<SetStateAction<string>>] = useState("")

	const getOddsSkyBetNextRacesHorse = async () => {
		try {
			setLoading(true)
			const res: ISkyBet = await postApi("/odds", { eventUrl: skyBetNextRacesHorse })
			console.log(res)
			setOdds(res)
		} catch(e) {
			console.log(e)
			navigate(fourZeroThreeRoute)
			setError(e)
		}
		setLoading(false)
	}

	return (
		<Page
			title="Odds"
		>
			{error && ( <h1 style={{ color: "red" }}>{error}</h1>)}
			{
				loading ? (
					<h2>Scraping site, please wait</h2>
				) : (
					<Button
						onClick={getOddsSkyBetNextRacesHorse}
						type="button"
						className="button"
					>
						Get Odds for {skyBetNextRacesHorse}
					</Button>
				)
			}
			{
				odds &&
				odds.title &&
				odds.info?.length > 0 && (
					<>
						<h2
							className="title"
						>
							Title: {odds.title}
						</h2>
						<GridList>
							{
								odds.info.map((curr: ISkyBetHorseInfo) => (
									<SkyBetHorseInfoItem
										data={curr}
									/>
								))
							}
						</GridList>
					</>
				)
			}
		</Page>
	)
}

export default Odds
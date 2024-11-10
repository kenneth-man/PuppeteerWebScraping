import React from "react"
import "./SkyBetHorseInfoItem.css"
import { Box } from ".."
import ISkyBetHorseInfoItemProps from "./ISkyBetHorseInfoItemProps"

const SkyBetHorseInfoItem = ({
	data,
	className,
	styles
}: ISkyBetHorseInfoItemProps) => {
	return (
		<Box
			type="flex"
			flexDirection="col"
			className={`skyBetHorseInfoItem ${className}`}
			styles={styles}
		>
			<Box
				type="flex"
				flexDirection="col"
			>
				<h1
					className="skyBetHorseInfoItemH1"
				>
					Team
				</h1>
				<h2
					className="skyBetHorseInfoItemH2"
				>
					Horse: {data.team.horseName}
				</h2>
				<h2
					className="skyBetHorseInfoItemH2"
				>
					Jockey: {data.team.jockey}
				</h2>
				<h2
					className="skyBetHorseInfoItemH2"
				>
					Trainer: {data.team.trainer}
				</h2>
			</Box>
			<Box
				type="flex"
				flexDirection="col"
			>
				<h1
					className="skyBetHorseInfoItemH1"
				>
					Stats
				</h1>
				<h2
					className="skyBetHorseInfoItemH2"
				>
					Age: {data.stats.age}
				</h2>
				<h2
					className="skyBetHorseInfoItemH2"
				>
					Weight: {data.stats.weight}
				</h2>
				<h2
					className="skyBetHorseInfoItemH2"
				>
					Form: {data.stats.form}
				</h2>
			</Box>
			<Box
				type="flex"
				flexDirection="col"
			>
				<h1
					className="skyBetHorseInfoItemH1"
				>
					Odds
				</h1>
				<h2
					className="skyBetHorseInfoItemH2"
				>
					Odds: {data.odds}
				</h2>
			</Box>
		</Box>
	)
}

export default SkyBetHorseInfoItem
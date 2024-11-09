import React from "react"
import INavbarProps from "./INavbarProps"
import { Link } from "react-router-dom"
import { Link as CustomLink } from ".."
import { homeRoute } from "../../constants/strings"
import PuppeteerLogo from "../../../../res/puppeteerLogo.png"
import "./Navbar.css"
import { Box } from ".."

const Navbar = ({
	className,
	styles
}: INavbarProps) => {
	return (
		<div
			className={`navbar fw ${className}`}
			style={styles}
		>
			<Box
				type="flex"
				className="group"
			>
				<Link
					to={homeRoute}
					className="link"
				>
					<img
						src={PuppeteerLogo}
						alt="Puppeteer Logo"
						className="logo"
					/>
				</Link>
				<Box
					type="flex"
					spacing={false}
					className="fw group space-x-8"
				>
					<CustomLink
						reactRouter={false}
						url="#"
					>
						Text test
					</CustomLink>
					<CustomLink
						reactRouter={false}
						url="#"
					>
						Text test
					</CustomLink>
					<CustomLink
						reactRouter={false}
						url="#"
					>
						Text test
					</CustomLink>
					<CustomLink
						reactRouter={false}
						url="#"
					>
						Text test
					</CustomLink>
				</Box>
			</Box>
			<Box
				type="flex"
				justifyContent="end"
				spacing={false}
				className="fw group space-x-8"
			>
				<CustomLink
					reactRouter={false}
					url="#"
				>
					Text test
				</CustomLink>
				<CustomLink
					reactRouter={false}
					url="#"
				>
					Text test
				</CustomLink>
				<CustomLink
					reactRouter={false}
					url="#"
				>
					Text test
				</CustomLink>
			</Box>
		</div>
	)
}

export default Navbar
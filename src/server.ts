import config from "config"
import pg from "pg"
import app from "./app"
import { apiPort } from "./constants/numbers"

export const client = new pg.Client({
	host: "localhost",
	port: 5432,
	database: "PuppeteerWebScrapingDB",
	user: "Kenneth",
	password: config.get("SECRETS.password")
})

client.connect();

app.listen(
	apiPort,
	async () => {
		console.log("App is running...")
		console.log(`> Port: ${apiPort}`)
		try {
			await client.query("SELECT * FROM users WHERE id = 1")
			console.log(`> Connected to Postgres Server`)
		} catch(e) {
			console.log("Could not connect to postgres server...")
			console.log(`> ${String(e)}`)
		}
	}
)
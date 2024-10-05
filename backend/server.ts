import config from "config"
import pg from "pg"
import app from "./app"
import { apiPort, postgresPort } from "./constants/numbers"

export const client = new pg.Client({
	host: "localhost",
	port: postgresPort,
	database: "PuppeteerWebScrapingDB",
	user: "Kenneth",
	password: config.get("SECRETS.postgres_password")
})

client.connect();

app.listen(
	apiPort,
	async () => {
		console.log("API is running...")
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
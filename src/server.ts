import config from 'config'
import pg from 'pg'
import app from './app'

export const client = new pg.Client({
	host: "localhost",
	port: 5432,
	database: "PuppeteerWebScrapingDB",
	user: "Kenneth",
	password: config.get('SECRETS.password')
})

client.connect();

const port = 8000

app.listen(
	port,
	async () => {
		console.log(`App running on port: ${port}`)
		const test = await client.query('SELECT * FROM users WHERE id = 1')
		console.log(`Test if postgres query is successful: ${!!test}`)
	}
)
# Puppeteer Web Scraping
### Utilises the puppeteer library https://pptr.dev/ to scrape betting odds from popular bookmakers

- ### To run scripts in the command line, refer to the `README.md` located in `rootDir/scripts`

- ### The API endpoints for Authentication, Authorization, Scraping, etc... are located in `rootDir/src/app.ts`

- ### I'm using `NPM Workspaces` to re-use common functionality between the scripts and the API, by importing from `rootDir/shared/*`

<br>

# Setup
## Add a `config` directory for environment variables (Secrets)
### 1. In the project root directory, create a directory called `config`

### 2. Inside `config`, create a file called `default.json` and paste the following json inside it
- ### We'll just use the password `abc123` in our example
```
{
	"SECRETS": {
		"password": "abc123"
	}
}
```
- ### E.g.
	- ### The `password` env variable above, is accessed via `config.get('SECRETS.password')`

	- ### If all else fails, just replace anywhere that uses `config.get('SECRETS.password')`, with `abc123`

<br>

## Start the postgres server - Run a docker container
### 1. Install and Open `Docker Desktop` https://docs.docker.com/engine/install/ or make sure the docker engine is running on your machine

### 2.
- ### Make sure you're in the `postgres` directory
```
 cd postgres
```

### 3.
- ### In our example, we will use `postgresdb` as the image name
```
docker build -t postgresdb .
```

### 4.
- ### `POSTGRES_DB`, `POSTGRES_USER` and `POSTGRES_PASSWORD` correspond to the values defined in `rootDir/src/server.ts` lines `10-12`
```
docker run --name postgresdb-container -p 5432:5432 -e POSTGRES_DB=PuppeteerWebScrapingDB -e POSTGRES_USER=Kenneth -e POSTGRES_PASSWORD=abc123 -d postgresdb
```

- ### If you have already ran the container before, open `Docker Desktop` and click the `Play` button or...
```
docker start [CONTAINER_ID]
```

<br>

## Start the API - Connects to the running postgres server
### 1.
- ### In the project root directory
```
npm i
```

### 2.
```
 npm start
```

<br>

## (OPTIONAL) - Query the postgres db using E.g. `pgAdmin`
### 1. Open `pgAdmin`

### 2. Click `Add New Server`

### 3. Under the `General` tab, Type in any name you want for the server

### 4. Under the `Connection` tab,
- ### `Host name/address` = `localhost`
- ### `Username` = (The `POSTGRES_USER=...` that was given with the `docker run` command previously)
- ### `Password` = (The `POSTGRES_PASSWORD=...` that was given with the `docker run` command previously)

<br>

## Main Dependencies
- ### node = v22.7.0
- ### config = ^3.3.12
- ### cors = ^2.8.5
- ### express = ^4.20.0
- ### express-rate-limit = ^7.4.0
- ### helmet = ^7.1.0
- ### pg = ^8.12.0
- ### puppeteer: ^23.3.0
- ### zod = ^3.23.8
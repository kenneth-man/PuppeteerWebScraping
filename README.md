# Puppeteer Web Scraping
### Uses the puppeteer library https://pptr.dev/ to scrape betting odds from popular bookmaker sites

- ### For more information on running the command line scripts, refer to the `README.md` located in `rootDir/scripts`

- ### For more information on the Backend API, refer to the `README.md` located in `rootDir/backend`
	- ### The steps to start the API are described under `Setup` of this file

- ### I'm using `NPM Workspaces` to re-use common functionality between `rootDir/scripts` and `rootDir/backend`, by importing from `rootDir/shared/*`

- ### `rootDir/postgres` contains a dockerfile that's used to get a postgres server running in 2 commands
	- ### The steps to start the postgres server are described under `Setup` of this file
	- ### It uses the `init.sql` file to initialize a `users` table and add a row of data with the following sign-in credentials that can be used in the `/auth/signIn` endpoint
		- ### `email` = `kenneth.waikin.man@outlook.com`
		- ### `password` = `password45678`

- ### The Url that can be passed into a script or the api `/odds` endpoint is determined by a `map` data structure in `rootDir/shared/constants/maps.ts`
	- ### The reason for this mapping is to cover the case in the future where a Url is dynamic (e.g. with unique id) and not a static Url like `https://m.skybet.com/horse-racing`
	- ### Each page can have a different layout of elements that changes which parents and children elements need to be selected
	- ### So, as long as a Url contains a common base Url, the same function will be called to scrape that page

<br>

# ▶️ Setup
## Add a `config` directory for environment variables (Secrets)
### 1. In `rootDir/backend`, create a directory called `config`

### 2. Inside `config`, create a file called `default.json` and paste the following json inside it
```
{
	"SECRETS": {
		"postgres_password": "abc123",
		"jwt_key": "lorem ipsum",
		"jwt_expiration": "5h"
	}
}
```
- ### The structure should look like...
```
<rootDir>
 └── backend
	└── config
      └── default.json
```
- ### How are `config` variables used?
	- ### E.g.
		- ### We're using the password `abc123` for the postgres server password

		- ### The `postgres_password` env variable above, is accessed in code via `config.get('SECRETS.postgres_password')`

		- ### If all else fails, just replace anywhere that uses `config.get('SECRETS.postgres_password')`, with `abc123`

<br>

## Start the postgres server by running a docker container
### 1. Install and Open `Docker Desktop` https://docs.docker.com/engine/install/ or make sure the docker engine is running on your machine

### 2. Make sure you're in the `postgres` directory
```
 cd postgres
```

### 3. Create the docker image
- ### In our example, we will use `postgresdb` as the image name
```
docker build -t postgresdb .
```

### 4. Run the docker container
- ### After executing the command below, the container should now be running
```
docker run --name postgresdb-container -p 5432:5432 -e POSTGRES_DB=PuppeteerWebScrapingDB -e POSTGRES_USER=Kenneth -e POSTGRES_PASSWORD=abc123 -d postgresdb
```

- ### The `POSTGRES_DB`, `POSTGRES_USER` and `POSTGRES_PASSWORD` values above, correspond to the values defined in `rootDir/backend/server.ts` lines `9-11`

- ### ***Note:*** If you have already ran the container before, open `Docker Desktop` and click the `Play` button on the container or...
```
docker start [CONTAINER_ID]
```

<br>

## Start the Backend API and connect to the postgres server
### 1. Make sure you're in the project root directory and install dependencies
```
npm i
```

### 2. Make sure you're in the `backend` directory
```
cd backend
```

### 3. Make sure the postgres server is running, then start the API
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

# ▶️ Main Dependencies
- ### node = v22.7.0
- ### bcryptjs: ^2.4.3
- ### config = ^3.3.12
- ### cors = ^2.8.5
- ### express = ^4.20.0
- ### helmet = ^7.1.0
- ### jsonwebtoken: ^9.0.2
- ### pg = ^8.12.0
- ### puppeteer: ^23.3.0
- ### zod = ^3.23.8
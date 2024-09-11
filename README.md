# Puppeteer Web Scraping - Setup Steps
## Add the `node-config` directory for environment variables
### 1. Create a directory within the project root directory called `config`

### 2. Create a file inside `config` called `default.json` and paste the following inside
```
{
	"SECRETS": {
		"password": "abc123"
	}
}
```
- ### The password env variable is accessed via `config.get('SECRETS.password')`

- ### If all else fails, just replace `config.get('SECRETS.password')` with `abc123`

<br>

## Start the postgres server
### 1. Install and Open `Docker Desktop` https://docs.docker.com/engine/install/ or make sure the docker engine is running on your machine

### 2.
```
 cd postgres
```

### 3.
- ### `postgresdb` is an arbitrary image name
```
docker build -t postgresdb .
```

### 4.
- ### `POSTGRES_DB`, `POSTGRES_USER` and `POSTGRES_PASSWORD` correspond to those defined in `rootDir/src/server.ts` lines `10-12`
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
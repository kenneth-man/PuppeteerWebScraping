# Puppeteer Web Scraping
### Uses the puppeteer library https://pptr.dev/ to scrape betting odds from popular bookmaker sites

### Refer to the following README files for specific information of the directory:
- ### `rootDir/scripts/README.md`
- ### `rootDir/backend/README.md`
- ### `rootDir/frontend/README.md`
- ### `rootDir/postgres/README.md`

### `NPM Workspaces` is used to re-use common functionality from `rootDir/shared`, between the following directories:
- ### `rootDir/scripts`
- ### `rootDir/backend`
- ### `rootDir/frontend`

<br>

# ▶️ Setup for local development environment
## Start the postgres server
### 1. Install and Open `Docker Desktop` https://docs.docker.com/engine/install/ or make sure the docker engine is running on your machine

### 2. Go to the `postgres` directory
```
 cd postgres
```

### 3. Create the docker image
- ### In our example, we will use `postgresdb` as the image name
```
docker build -t postgresdb .
```

### 4. Run the docker container
- ### In our example, we are using the `rootDir/backend/config/development.json` `POSTGRES_PASSWORD`
```
docker run --name postgresdb-container -p 5432:5432 -e POSTGRES_DB=PuppeteerWebScrapingDB -e POSTGRES_USER=Kenneth -e POSTGRES_PASSWORD=abc123 -d postgresdb
```

- ### ***Note:*** If you have already ran the container before, open `Docker Desktop` and click the `Play` button on the container or...
```
docker start [CONTAINER_ID]
```

<br>

## Start the Backend API server and connect to the postgres server
### 1. In the project root directory,  install dependencies
```
npm i
```

### 2. Go to the `backend` directory
```
cd backend
```

### 3. Make sure the postgres server is running, then start the server
```
npm start
```

<br>

## Start the Frontend server
### 1. In the project root directory,  install dependencies (If you haven't already)
```
npm i
```

### 2. Go to the `frontend` directory
```
cd frontend
```

### 3. Start the server
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
- ### dotenv: ^16.4.5
- ### cors = ^2.8.5
- ### express = ^4.20.0
- ### helmet = ^7.1.0
- ### jsonwebtoken: ^9.0.2
- ### pg = ^8.12.0
- ### puppeteer: 23.3.0
- ### zod = ^3.23.8
- ### react: ^18.3.1
- ### typescript: ^5.6.2
- ### vite: ^5.4.8
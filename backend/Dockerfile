FROM node:22.7.0

RUN --mount=type=secret,id=RDS_POSTGRES_ENDPOINT,env= \
		cat /run/secrets/RDS_POSTGRES_ENDPOINT > /saved/RDS_POSTGRES_ENDPOINT \
	--mount=type=secret,id=RDS_POSTGRES_NAME \
		cat /run/secrets/RDS_POSTGRES_NAME > /saved/RDS_POSTGRES_NAME \
	--mount=type=secret,id=RDS_POSTGRES_MASTER_USERNAME \
		cat /run/secrets/RDS_POSTGRES_MASTER_USERNAME > /saved/RDS_POSTGRES_MASTER_USERNAME \
    --mount=type=secret,id=RDS_POSTGRES_MASTER_PASSWORD \
		cat /run/secrets/RDS_POSTGRES_MASTER_PASSWORD > /saved/RDS_POSTGRES_MASTER_PASSWORD \
	--mount=type=secret,id=JWT_KEY \
		cat /run/secrets/JWT_KEY > /saved/JWT_KEY

ENV RDS_POSTGRES_ENDPOINT=$(cat /saved/RDS_POSTGRES_ENDPOINT)
ENV RDS_POSTGRES_MASTER_PASSWORD=$(cat /saved/RDS_POSTGRES_MASTER_PASSWORD)
ENV RDS_POSTGRES_MASTER_USERNAME=$(cat /saved/RDS_POSTGRES_MASTER_USERNAME)
ENV RDS_POSTGRES_NAME=$(cat /saved/RDS_POSTGRES_NAME)
ENV JWT_KEY=$(cat /saved/JWT_KEY)

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/shared

RUN npm install

WORKDIR /app/backend/config

RUN echo '{ \
	"VARS": { \
		"postgres_host": "'$RDS_POSTGRES_ENDPOINT'", \
		"postgres_db_name": "'$RDS_POSTGRES_NAME'", \
		"postgres_user": "'$RDS_POSTGRES_MASTER_USERNAME'", \
		"postgres_password": "'$RDS_POSTGRES_MASTER_PASSWORD'", \
		"jwt_key": "'$JWT_KEY'" \
	} \
}' > production.json

WORKDIR /app/backend

RUN npm install

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "preview" ]
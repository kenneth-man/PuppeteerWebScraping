FROM node:22.7.0

RUN --mount=type=secret,id=RDS_POSTGRES_ENDPOINT,env= \
		export temp=$(cat /run/secrets/RDS_POSTGRES_ENDPOINT) && \
		echo $temp > /savedSecrets/RDS_POSTGRES_ENDPOINT \
	--mount=type=secret,id=RDS_POSTGRES_NAME \
		export temp=$(cat /run/secrets/RDS_POSTGRES_NAME) && \
		echo $temp > /savedSecrets/RDS_POSTGRES_NAME \
	--mount=type=secret,id=RDS_POSTGRES_MASTER_USERNAME \
		export temp=$(cat /run/secrets/RDS_POSTGRES_MASTER_USERNAME) && \
		echo $temp > /savedSecrets/RDS_POSTGRES_MASTER_USERNAME \
    --mount=type=secret,id=RDS_POSTGRES_MASTER_PASSWORD \
		export temp=$(cat /run/secrets/RDS_POSTGRES_MASTER_PASSWORD) && \
		echo $temp > /savedSecrets/RDS_POSTGRES_MASTER_PASSWORD \
	--mount=type=secret,id=JWT_KEY \
		export temp=$(cat /run/secrets/JWT_KEY) && \
		echo $temp > /savedSecrets/JWT_KEY

ENV RDS_POSTGRES_ENDPOINT=$(cat /savedSecrets/RDS_POSTGRES_ENDPOINT)
ENV RDS_POSTGRES_NAME=$(cat /savedSecrets/RDS_POSTGRES_NAME)
ENV RDS_POSTGRES_MASTER_USERNAME=$(cat /savedSecrets/RDS_POSTGRES_MASTER_USERNAME)
ENV RDS_POSTGRES_MASTER_PASSWORD=$(cat /savedSecrets/RDS_POSTGRES_MASTER_PASSWORD)
ENV JWT_KEY=$(cat /savedSecrets/JWT_KEY)

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
FROM node:22.7.0

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/shared

RUN npm install

WORKDIR /app/backend/config

RUN --mount=type=secret,id=RDS_POSTGRES_ENDPOINT \
	--mount=type=secret,id=RDS_POSTGRES_NAME,env=RDS_POSTGRES_NAME \
	--mount=type=secret,id=RDS_POSTGRES_MASTER_USERNAME,env=RDS_POSTGRES_MASTER_USERNAME \
    --mount=type=secret,id=RDS_POSTGRES_MASTER_PASSWORD,env=RDS_POSTGRES_MASTER_PASSWORD \
	--mount=type=secret,id=JWT_KEY,env=JWT_KEY \
	echo '{ \
		"VARS": { \
			"postgres_host": "'$(cat /app/savedSecrets/RDS_POSTGRES_ENDPOINT)'", \
			"postgres_db_name": "'$(cat /app/savedSecrets/RDS_POSTGRES_NAME)'", \
			"postgres_user": "'$(cat /app/savedSecrets/RDS_POSTGRES_MASTER_USERNAME)'", \
			"postgres_password": "'$(cat /app/savedSecrets/RDS_POSTGRES_MASTER_PASSWORD)'", \
			"jwt_key": "'$(cat /app/savedSecrets/JWT_KEY)'" \
		} \
	}' > production.json

WORKDIR /app/backend

RUN npm install

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "preview" ]
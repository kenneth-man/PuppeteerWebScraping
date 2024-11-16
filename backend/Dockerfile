FROM node:22.7.0

RUN --mount=type=secret,id=RDS_POSTGRES_ENDPOINT,env=RDS_POSTGRES_ENDPOINT \
	--mount=type=secret,id=RDS_POSTGRES_NAME,env=RDS_POSTGRES_NAME \
	--mount=type=secret,id=RDS_POSTGRES_MASTER_USERNAME,env=RDS_POSTGRES_MASTER_USERNAME \
    --mount=type=secret,id=RDS_POSTGRES_MASTER_PASSWORD,env=RDS_POSTGRES_MASTER_PASSWORD \
	--mount=type=secret,id=JWT_KEY,env=JWT_KEY

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/shared

RUN npm install

WORKDIR /app/backend/config

RUN echo '{ \
	"VARS": { \
		"postgres_host": "'$(cat /savedSecrets/RDS_POSTGRES_ENDPOINT)'", \
		"postgres_db_name": "'$(cat /savedSecrets/RDS_POSTGRES_NAME)'", \
		"postgres_user": "'$(cat /savedSecrets/RDS_POSTGRES_MASTER_USERNAME)'", \
		"postgres_password": "'$(cat /savedSecrets/RDS_POSTGRES_MASTER_PASSWORD)'", \
		"jwt_key": "'$(cat /savedSecrets/JWT_KEY)'" \
	} \
}' > production.json

WORKDIR /app/backend

RUN npm install

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "preview" ]
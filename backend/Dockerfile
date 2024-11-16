FROM node:22.7.0

WORKDIR /app

RUN --mount=type=secret,id=RDS_POSTGRES_ENDPOINT,env=RDS_POSTGRES_ENDPOINT \
	echo $RDS_POSTGRES_ENDPOINT > /savedSecrets/RDS_POSTGRES_ENDPOINT.txt \
	--mount=type=secret,id=RDS_POSTGRES_NAME,env=RDS_POSTGRES_NAME \
	echo $RDS_POSTGRES_NAME > /savedSecrets/RDS_POSTGRES_NAME.txt \
	--mount=type=secret,id=RDS_POSTGRES_MASTER_USERNAME,env=RDS_POSTGRES_MASTER_USERNAME \
	echo $RDS_POSTGRES_MASTER_USERNAME > /savedSecrets/RDS_POSTGRES_MASTER_USERNAME.txt \
    --mount=type=secret,id=RDS_POSTGRES_MASTER_PASSWORD,env=RDS_POSTGRES_MASTER_PASSWORD \
	echo $RDS_POSTGRES_MASTER_PASSWORD > /savedSecrets/RDS_POSTGRES_MASTER_PASSWORD.txt \
	--mount=type=secret,id=JWT_KEY,env=JWT_KEY \
	echo $JWT_KEY > /savedSecrets/JWT_KEY.txt

COPY . .

RUN npm install

WORKDIR /app/shared

RUN npm install

WORKDIR /app/backend/config

RUN echo '{ \
	"VARS": { \
		"postgres_host": "'$(cat /app/savedSecrets/RDS_POSTGRES_ENDPOINT.txt)'", \
		"postgres_db_name": "'$(cat /app/savedSecrets/RDS_POSTGRES_NAME.txt)'", \
		"postgres_user": "'$(cat /app/savedSecrets/RDS_POSTGRES_MASTER_USERNAME.txt)'", \
		"postgres_password": "'$(cat /app/savedSecrets/RDS_POSTGRES_MASTER_PASSWORD.txt)'", \
		"jwt_key": "'$(cat /app/savedSecrets/JWT_KEY.txt)'" \
	} \
}' > production.json

WORKDIR /app/backend

RUN npm install

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "preview" ]
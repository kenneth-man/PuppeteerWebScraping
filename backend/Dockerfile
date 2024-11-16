FROM node:22.7.0

RUN --mount=type=secret,id=RDS_POSTGRES_ENDPOINT \
    --mount=type=secret,id=RDS_POSTGRES_MASTER_PASSWORD \
    --mount=type=secret,id=RDS_POSTGRES_MASTER_USERNAME \
    --mount=type=secret,id=RDS_POSTGRES_NAME \
	--mount=type=secret,id=JWT_KEY \

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/shared

RUN npm install

WORKDIR /app/backend/config

RUN echo '{ \
	"VARS": { \
		"postgres_host": "'$(cat /run/secrets/RDS_POSTGRES_ENDPOINT)'", \
		"postgres_db_name": "'$(cat /run/secrets/RDS_POSTGRES_NAME)'", \
		"postgres_user": "'$(cat /run/secrets/RDS_POSTGRES_MASTER_USERNAME)'", \
		"postgres_password": "'$(cat /run/secrets/RDS_POSTGRES_MASTER_PASSWORD)'", \
		"jwt_key": "'$(cat /run/secrets/JWT_KEY)'" \
	} \
}' > production.json

WORKDIR /app/backend

RUN npm install

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "preview" ]
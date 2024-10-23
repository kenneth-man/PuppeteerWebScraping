FROM node:22.7.0

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/shared

RUN npm install

WORKDIR /app/frontend

RUN npm install

RUN npm run build

EXPOSE 5173

CMD [ "npm", "run", "preview" ]
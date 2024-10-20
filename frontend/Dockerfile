FROM node:22.7.0

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /app/frontend

EXPOSE 5173

CMD [ "npm", "start" ]
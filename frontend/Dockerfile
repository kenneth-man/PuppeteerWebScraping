FROM node:22.7.0

WORKDIR /temp

COPY package.json package-lock.json .

RUN npm install

COPY shared /temp/shared

COPY frontend /temp/frontend

WORKDIR /temp/frontend

RUN npm install

# do i need this?
ENV PORT=3000

# do i need this?
EXPOSE 3000

CMD [ "npm", "start" ]
FROM node:22.7.0

WORKDIR /temp

COPY package.json .

COPY shared/package.json ../shared/

RUN npm install

COPY . .

# do i need this?
ENV PORT=3000

# do i need this?
EXPOSE 3000

CMD [ "npm", "start" ]
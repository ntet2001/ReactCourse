FROM node:20.10.0-alpine

LABEL maintainer="NTET MANYAMA IGOR"

LABEL creation_date="08-08-2024 at 14:28"

WORKDIR /app

COPY package.json .
 
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev"]



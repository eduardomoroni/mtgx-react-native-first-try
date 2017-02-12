#Code Fresh CI DockerFile
#https://hub.docker.com/r/library/node/tags/
FROM node:latest
MAINTAINER Eduardo Morôni <eduardomoroni@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --silent
COPY . /usr/src/app

EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "start" ]

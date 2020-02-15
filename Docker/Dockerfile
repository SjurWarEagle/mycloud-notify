FROM node:13.8.0-alpine3.10

RUN mkdir /project
ADD . /project
WORKDIR /project
RUN npm install
ENTRYPOINT npx nest start

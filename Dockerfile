FROM node:16 as build

WORKDIR /app

COPY . .

RUN yarn install --no-cache --frozen-lockfile
RUN yarn build
RUN yarn global add serve

RUN serve -l $PORT build
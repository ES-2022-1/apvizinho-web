FROM node:16 as build

WORKDIR /app

COPY . .

RUN yarn install --no-cache --frozen-lockfile
RUN yarn build
RUN yarn global add serve

CMD serve -l $PORT build
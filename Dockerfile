FROM node:16 as build

WORKDIR /app
RUN yarn install --no-cache --frozen-lockfile
RUN yarn build

FROM nginx:1.21.6
COPY --from=build /app/build /usr/share/nginx/html
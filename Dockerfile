FROM node:16 as build

WORKDIR /app

COPY . .
ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL

RUN yarn install --no-cache --frozen-lockfile
RUN yarn build

FROM nginx:1.21.6
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build /app/build /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

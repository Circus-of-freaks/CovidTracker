FROM node:10.17.0-alpine as frontend_builder

WORKDIR /code

COPY yarn.lock .
COPY package.json .
RUN yarn install


COPY public public
COPY src src
COPY tsconfig.json .
COPY tsconfig.paths.json .
COPY webpack.config.js .
COPY babel.config.js .
COPY .eslintrc .
RUN yarn build

FROM nginx:alpine

COPY --from=frontend_builder /code/dist/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

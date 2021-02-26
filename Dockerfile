FROM node:10.17.0-alpine as frontend_builder

WORKDIR /code

COPY yarn.lock .
COPY package.json .
COPY tsconfig.json .
COPY tsconfig.paths.json .
COPY webpack.config.js .
COPY babel.config.js .
RUN yarn install


COPY public public
COPY src src
RUN ls -l
RUN yarn build

FROM nginx:alpine

COPY --from=frontend_builder /code/build/ /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
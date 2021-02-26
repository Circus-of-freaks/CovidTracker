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


FROM nginx:1.17-alpine
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY nginx.conf /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=frontend_builder /code/dist/ /usr/share/nginx/html


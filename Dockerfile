FROM node:16-alpine

WORKDIR /var/www/html

COPY . /var/www/html

EXPOSE 3000

RUN yarn install
RUN yarn build

CMD yarn start
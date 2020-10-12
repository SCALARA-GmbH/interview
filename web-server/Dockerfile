FROM node:12

RUN curl -s -L -o /usr/local/bin/wait-for-it https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh \
    && chmod +x /usr/local/bin/wait-for-it

WORKDIR /app

COPY package.json yarn.lock ./
COPY src ./src
COPY migrations ./migrations
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY docker.typeorm.ormconfig.yaml ./typeorm.ormconfig.yaml
COPY docker.ormconfig.yaml ./ormconfig.yaml
COPY clean_run.sh ./
COPY nest-cli.json ./

RUN yarn install
RUN yarn build

CMD ["sh", "-c", "yarn start:prod"]

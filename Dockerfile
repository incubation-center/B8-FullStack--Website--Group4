FROM node:16.17.0-alpine3.15

RUN apk add --no-cache libc6-compat
RUN yarn global add yarn

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

WORKDIR /home/nextjs/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

# need to install linux specific swc builds
RUN yarn add -D @swc/cli @swc/core

COPY . .


RUN yarn run build
RUN chmod -R 777 /home/nextjs/app/.next/cache/images
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

CMD [ "yarn", "start" ]

# Mount local file

VOLUME /home/nextjs/app/local-file


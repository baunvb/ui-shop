FROM node:18-alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install
COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]

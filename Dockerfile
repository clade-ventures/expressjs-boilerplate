FROM node:14-slim
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

## Stage two
FROM node:14-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /usr/src/app/build ./build

CMD [ "npm", "start" ]
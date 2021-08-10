FROM node:12
ENV NODE_ENV=development NODE_PATH=/usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
CMD [ "npm","start" ]
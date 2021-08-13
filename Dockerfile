FROM node:10
ENV NODE_ENV=development NODE_PATH=/usr/src/app
ENV PORT=3000
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 3000
# Bundle app source
COPY . .
CMD ["npm","start"]
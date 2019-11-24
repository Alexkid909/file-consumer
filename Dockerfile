FROM node:11
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
EXPOSE 8443
COPY . .
CMD [ "node", "dist/server.js"]

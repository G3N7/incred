FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm build

# Bundle app source
COPY . .

CMD [ "npm", "start" ]
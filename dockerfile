FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Bundle app source
COPY . .

# Compile Source
RUN npm build

CMD [ "npm", "start" ]
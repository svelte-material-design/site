FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/local/src/smui

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
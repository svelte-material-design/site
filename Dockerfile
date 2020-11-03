FROM node:14

ARG NPM_TOKEN

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/local/src/smui/svelte-material-ui-site/

# Copying source files
COPY . .

# Install
RUN npm install
RUN rm .npmrc

# Building app
RUN npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]

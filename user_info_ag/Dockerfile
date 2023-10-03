FROM node:carbon-slim

# Create app directory
WORKDIR /user_info_ag

# Install app dependencies
COPY package.json /user_info_ag/
RUN npm install

# Bundle app source
COPY . /user_info_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]

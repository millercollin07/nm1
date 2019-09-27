FROM node:10

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm run-script build
RUN npm install -g serve
EXPOSE 5000

COPY . .
CMD ["serve", "-s", "build"]

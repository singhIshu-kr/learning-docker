from node:alpine

workdir /app

run npm install -g nodemon

COPY package.json package.json

run npm install

COPY . .

expose 3000

cmd ["nodemon", "db.js"]

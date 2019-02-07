FROM node:alpine

WORKDIR /app

RUN npm install -g nodemon

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 9000

VOLUME /app

CMD ["npm", "start"]

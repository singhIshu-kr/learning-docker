FROM node:alpine

WORKDIR /app

RUN npm install -g nodemon

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 8000

VOLUME /app

CMD ["nodemon", "app.js"]

FROM node:14.15-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]

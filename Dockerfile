FROM node:16-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "preview", "--", "--host", "--port", "1337"]
FROM node:6

ADD app.js ./
ADD package.json ./

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]

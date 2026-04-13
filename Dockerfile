FROM node:20
WORKDIR /app
COPY ./app /app
RUN npm install
CMD ["node","index.js"]


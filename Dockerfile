FROM node:18
WORKDIR /app-organizador
COPY . .
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000
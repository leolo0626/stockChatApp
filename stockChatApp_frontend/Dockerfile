FROM node:16.10-alpine AS build
WORKDIR /app
COPY ./package.json ./
COPY package-lock.json ./
COPY . .
RUN npm i
RUN npm run build

FROM nginx:latest AS ngi
COPY --from=build /app/dist/stock-chat-app-frontend /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
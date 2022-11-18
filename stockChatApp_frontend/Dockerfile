FROM node:16.10-alpine AS build
WORKDIR /app
COPY ./package.json ./
COPY package-lock.json ./
COPY . .
RUN npm i
RUN npm run build

FROM nginx:latest AS ngi
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/stock-chat-app-frontend .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
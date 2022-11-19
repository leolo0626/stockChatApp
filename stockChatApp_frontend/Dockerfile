FROM node:16.10-alpine AS build
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM nginx:latest AS ngi
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/stock-chat-app-frontend .
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
docker stop angular-chat-app
docker rm angular-chat-app
docker rmi angular-app
docker build -t angular-app -f Dockerfile.dev .
docker run -d -p 4200:4200 --name angular-chat-app angular-app

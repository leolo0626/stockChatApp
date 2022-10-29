FROM maven:3.8.2-jdk-11 AS build

COPY src /home/app/src
COPY pom.xml /home/app

RUN mvn -f /home/app/pom.xml clean package -Dmaven.test.skip

FROM adoptopenjdk/openjdk11:alpine-jre

ARG JASYPT_ENCRYPTOR_PWD
ENV JASYPT_ENCRYPTOR_PWD $JASYPT_ENCRYPTOR_PWD


COPY --from=build /home/app/target/stockChatApp_backend-0.0.1-SNAPSHOT.jar /app/stock-chat-app-restful.jar
EXPOSE 8080
ENTRYPOINT ["java",  "-Djasypt.encryptor.password=${JASYPT_ENCRYPTOR_PWD}","-jar", "/app/stock-chat-app-restful.jar"]



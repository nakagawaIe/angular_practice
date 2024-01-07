FROM node:20-bullseye-slim
RUN npm install -g @angular/cli
RUN apt-get update

# VSCodeの場合
#RUN apt-get install git -y
#COPY ~/.ssh/* /root/.ssh/
#RUN chmod 600 /root/.ssh/*

# IntelliJの場合（ひとまず）
RUN apt-get install git procps -y

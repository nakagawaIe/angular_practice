FROM node:20-bullseye-slim
RUN npm install -g @angular/cli
RUN apt-get update
RUN apt-get install git -y

FROM node:21-bullseye-slim
RUN <<EOF
  npm install -g @angular/cli
  apt-get update
  apt-get install git
EOF
EXPOSE 4200

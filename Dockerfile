FROM node:latest

ARG PUID
ARG PGID

RUN userdel node
RUN addgroup --gid $PGID user
RUN adduser --disabled-password --gecos '' --uid $PUID --gid $PGID user
RUN npm install -g @vue/cli

USER user
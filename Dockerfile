FROM ubuntu:bionic

ENV NGINX_VERSION 1.14.0-0ubuntu1.6

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections && \
    apt-get update && apt-get install curl nodejs npm -y
RUN apt-get install -y nginx=$NGINX_VERSION
RUN mkdir /var/www/html/app
WORKDIR /var/www/html/app
COPY package.json ./
COPY package-lock.json ./
COPY public ./public
COPY src ./src
RUN npm install && npm build
COPY app.conf /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled
EXPOSE 80

CMD ["nginx", "-g", "daemon on;"]

STOPSIGNAL SIGTERM
HEALTHCHECK CMD curl localhost:80

FROM nginx:stable-alpine

RUN rm /usr/share/nginx/html/*

COPY ./config/default.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443
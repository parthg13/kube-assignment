FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./index.html /usr/share/nginx/html
EXPOSE 3001
CMD [ "nginx", "-g", "daemon off;" ]
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN cd /usr/share/nginx/html && mkdir files
ADD ./aa.png /usr/share/nginx/html/files/
ADD ./bb.jpg /usr/share/nginx/html/files/
# WORKDIR /usr/share/nginx/html
# RUN mkdir files
EXPOSE 3002
CMD [ "nginx", "-g", "daemon off;" ]
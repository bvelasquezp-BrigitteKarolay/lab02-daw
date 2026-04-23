FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y apache2 && \
    echo "ServerName localhost" >> /etc/apache2/apache2.conf

COPY lab02 /var/www/html/lab02

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
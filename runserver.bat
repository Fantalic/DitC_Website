docker run -d --name my_webserver -p 8080:80 -v .\dist:/usr/share/nginx/html:ro nginx
@REM docker run -it --name my_express_server -p 8080:8080 -v .\server:/usr/src/app -w /usr/src/app node /bin/sh
FROM nginx:1.13
#Copy de-code_dist
COPY dist/ /usr/share/nginx/html/
#Copy default nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf
#Expose port
EXPOSE 80

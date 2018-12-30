FROM nginx:1.13

# Create app directory
WORKDIR /usr/src/app

#Pre build
#Install all required packages for production build

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

#Do production build of docz
RUN npm run docz:build

#Copy production dist. files
COPY dist/ /usr/share/nginx/html/

#Copy default nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

#Expose port
EXPOSE 80

FROM node:latest
WORKDIR /srv/hr
COPY package.json /srv/hr/
RUN npm install && npm install -g @angular/cli
COPY . /srv/hr

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]
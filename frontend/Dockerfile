FROM node:alpine as build

WORKDIR /app
RUN set -ex; apk update \
 && apk add git curl \
 && git clone "https://github.com/sktrinh12/rpi-k8s-react.git" tmp \
 && pwd \
 && (cd tmp/frontend && tar c .) | (cd /app && tar xf -) \
 && ls -la \
 && rm -rf tmp

ENV PATH /app/node_modules/.bin:$PATH

# COPY package*.json ./
RUN npm install

# COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN sed -i '/location \/ {$/a try_files \$uri \/index.html;' /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

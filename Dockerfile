FROM node:19.8.1 AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm i
RUN npm run build

FROM nginx:1.23.4
COPY --from=builder /app/build /usr/share/nginx/html

# Non-Root-User with permitions
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

HEALTHCHECK CMD curl --fail http://localhost:80 || exit 1

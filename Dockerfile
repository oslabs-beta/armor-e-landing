FROM node:18-apline
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["node", ""]
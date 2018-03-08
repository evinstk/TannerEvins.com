FROM node:carbon
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN ./node_modules/.bin/gulp
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "serve"]

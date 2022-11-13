FROM node:18-alpine

WORKDIR /usr/milangatactica-site/app
COPY ./package.json ./
RUN npm install
COPY ./ .
RUN npm run build
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
FROM node:10
RUN mkdir /frontend
WORKDIR /frontend
ADD . /frontend/
RUN npm install
RUN npm i numjs

EXPOSE 3000
CMD ["npm","start"]


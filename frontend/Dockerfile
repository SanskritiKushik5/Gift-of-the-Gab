FROM node:16
RUN mkdir /frontend
WORKDIR /frontend
ADD . /frontend/
RUN npm install

EXPOSE 3000
CMD ["npm","start"]


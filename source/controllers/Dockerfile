FROM node:12

WORKDIR /app

COPY package*.json ./
# RUN apt-get -y update
# RUN apt-get -y upgrade
# RUN apt-get install -y ffmpeg
RUN npm install

COPY . .

EXPOSE 8070

CMD ["npm", "run", "dev"]
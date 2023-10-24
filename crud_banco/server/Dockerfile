FROM node:14

WORKDIR /server

COPY . /server

RUN npm install

EXPOSE 3001
# Execute as migrações do banco de dados MySQL antes de iniciar o aplicativo
CMD npm run migration:generate && npm run migration:run && npm run dev
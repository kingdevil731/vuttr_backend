#indicar o imagem base : inidicar o tag/versão especifica
FROM node:12
# indicar a area de trabalho
WORKDIR /usr/src/app
# copiar o package.json e package-lock.json( caso exista ) para depois proceder a instalação
COPY package*.json ./
# correr o npm install para instalar as dependencias
RUN npm install
# copiar o codigo fonte da api
# O . significa tudo existente na pasta
COPY . .
# expor a porta 3000
EXPOSE 3000
# comando para executar
CMD ["node", "index.js"]

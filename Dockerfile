# Define la imagen base
FROM node:14

# Crea un directorio para la aplicación
WORKDIR /usr/src/app

# Copia el archivo de definición de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD [ "node", "server.js" ]

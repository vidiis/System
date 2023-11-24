# Usar una imagen base de Nginx
FROM nginx:alpine

# Copiar el contenido estático al directorio de Nginx
COPY ./ /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx en el contenedor
CMD ["nginx", "-g", "daemon off;"]

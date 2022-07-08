FROM node

COPY . /app

# Directorio de trabajo
WORKDIR /app

# Comando a ejecutar
RUN npm install

# Variable de entorno
ENV PORT 3000

# Puerto para acceder desde el navegador
EXPOSE 3000

ENTRYPOINT ["npm","start"]
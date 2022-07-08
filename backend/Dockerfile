FROM  node

COPY . /app/veterinaria

# Directorio de trabajo
WORKDIR /app/veterinaria

# Comando a ejecutar
RUN npm install

# Variable de entorno
ENV PORT 3000

# Puerto para acceder desde el navegador
EXPOSE 3000

ENTRYPOINT ["node", "start"]
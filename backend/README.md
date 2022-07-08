# Docker
- **Compilar el contenedor**
  Ejecutar el siguiente comando en una terminal:
  ```
  docker compose -f "docker-compose.yml" up -d --build
  ```

# Rutas
- **Clientes**
  http://localhost:8080/v2/sexto/api/clientes
- **Locales**
  http://localhost:8080/v2/sexto/api/locales
- **Mascotas**
  http://localhost:8080/v2/sexto/api/mascotas
- **Reservaciones**
  http://localhost:8080/v2/sexto/api/reservaciones
- **Servicios**
  http://localhost:8080/v2/sexto/api/servicios
- **Usuarios**
  http://localhost:8080/v2/sexto/api/usuarios
- **Veterinarios**
  http://localhost:8080/v2/sexto/api/veterinarios
- **Login**
  Definición en el backend:
  `/:user/:pass`
  Ruta completa:
  http://localhost:8080/v2/sexto/api/usuarios/:user/:pass
  Ejemplo:
  `http://localhost:8080/v2/sexto/api/usuarios/`usuario123`/`contraseña123

# Versiones del API:
  Ejemplo con la ruta `usuarios` en las diferentes versiones de la Rest API:
 - **Monolítico:**
  [`v1`/sexto/api](http://localhost:8080/v1/sexto/api/usuarios)
 - **Microservicios:**
  [`v2`/sexto/api](http://localhost:8080/v2/sexto/api/usuarios)

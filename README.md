# Gestión de Libros

Este proyecto es una aplicación backend desarrollada por **Alejandro Cogollo Julio** para gestionar una colección de libros. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una base de datos MongoDB utilizando Node.js, TypeScript, Express y Mongoose. Además, cuenta con validación de datos utilizando Joi y muestra los datos de los libros en una tabla renderizada con EJS.

## Características

- **Operaciones CRUD:** Permite crear, leer, actualizar y eliminar libros en la base de datos.
- **Validación de Datos:** Los datos de entrada se validan utilizando Joi para asegurar la integridad de la información.
- **Conexión a MongoDB:** La aplicación se conecta a una base de datos MongoDB utilizando Mongoose.
- **Tabla de Libros:** Los datos de los libros se muestran en una tabla HTML renderizada con EJS.
- **Gestión de Variables de Entorno:** Se utiliza `dotenv` para manejar de manera segura las variables de entorno como la URL de la base de datos.

## Requisitos

- Node.js
- MongoDB
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Alejandro-cj/gestion-de-libros-/tree/main
   cd gestionLibros

2. Instala las dependencias:
    npm install

3. Configura las variables de entorno:
    MONGODB_URI=tu_url_de_mongodb
    PORT=3000

4. Ejecuta la aplicación:
    npx ts-node-dev src/index.ts

## Uso

 - Crear un libro:
        Ruta: POST /books
        Ejemplo de cuerpo de la solicitud
        {
            "title": "El nombre del viento",
            "author": "Patrick Rothfuss",
            "publicationDate": "2007-03-27",
            "isbn": "9788496940032",
            "genre": "Fantasía"
        }
 
 - Leer todos los libros:

        Ruta: GET /books
  - Leer un libro específico:

        Ruta: GET /books/:id
  - Actualizar un libro:

        Ruta: PATCH /books/:id
        Ejemplo de cuerpo de la solicitud:
        {
             "title": "El temor de un hombre sabio"
        }

   - Eliminar un libro:

        Ruta: DELETE /books/:id
    - Ver la tabla de libros:

        Ruta: GET /books/view


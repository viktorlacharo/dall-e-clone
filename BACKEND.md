# DALL-E API

Apuntes para la creación del backend.

>La función que requiere back, es la función `generateImg` del archivo CreatePost

Lo primero es crear una carpeta `sever`

## Configuraciones iniciales

    npm init -y

Crear script, para arrancar nodemon para el archivo index.js que se tiene que crear.

    "start": "nodemon index"

Instalar  dependencias

    npm i cloudinary cors dotenv express mongoose nodemon openai

>cloudinary Sirve para almacenar las imágenes

Añadir la propiedad al package.json

    "type": "module",

## Código

El código estará comentado por ChatGPT. (index.js)

Para correr el servidor

    npm index.js

## Conectando con MongoDB

Creamos carpeta y archivo `connect.js` < `MongoDB` < Server

## Models

Con las base de datos conectada. Cosa que se hace creando un nuevo proyecto en su pagina web.

Creamos la carpeta y archivo `post.js`>`models`>mongoDB.

## Routes

Creamos los archivos de las rutas `dalleRoutes`>`routes` | `postRoutes`>`routes`

Los implementamos dentro del index.js

    app.use("/api/v1/post", postRoutes);
    app.use("/api/v1/dalle", dalleRoutes);

## Conexión con la API

Primero, necesitamos acceso a la api, por lo que nos dirigimos a la pagina de OpenAI, y obtenemos una clave para la [API](https://openai.com/api/).

La agregamos al archivo .env, junto con la petición hacia mongodb.

Ver más en `dalleRoutes.js`

## Integrando el back con el front

Para conectar, el front con el back, trabajaré desde el archivo createPost, desde la función `generateImg()`.
Ver el archivo para los comentarios.

## Creando posts

En `postRoutes`, es donde estará la lógica para almacenar las imágenes generadas desde generateImg().

Lo primero es entrar en [Cloudinary](https://cloudinary.com)

Almacena nuestras imágenes.

Al registrarnos, primero debemos copiar el nombre del cloud, la api Key, y la api Secret, desde el dashboard, y los pegamos al .env.

Con todo configurado dentro del .env, ahora estoy trabajando en la configuración básica de cloudinary, en el archivo postRoutes.js, simplemente se ha incluido la función `config()` para pasar las configuraciones de cloudinary.

La parte del backend, es  sencilla de entender, y más con los comentarios, en el archivo, `postRoutes`.

Pero tenemos que acabar de implementar el botón desde el frontend, que nos permita compartir la imagen, para eso trabajamos con la función `handleSubmit()` del archivo `createPost`.

Para cargar todas las imágenes, en la pagina principal, lo hacemos mediante un useEffect, en el archivo de `Home.jsx`.

Después de batallar con el formato de las imágenes, al final he decidido no usar Cloudinary, para evitar el por culo del formato de las imágenes.

## Descargar las imágenes

Para descargar las imágenes se ha creado el componente de `Card`, en el que se crea el contenedor con la imagen, detalles, y el boton para bajar la imagen. Para bajarla simplemente se ha creado una funcion en utils, que permite bajar las imágenes.

## Buscador

El buscador, es básico, mediante estados de React, y buscar a traves de `filter()`, ver más en el componente de `Home.jsx`

El despliegue del backend, se va a hacer en [Render](https://render.com/)

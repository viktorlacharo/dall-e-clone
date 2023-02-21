import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

// Configuramos dotenv para permitirnos leer las variables de entorno desde el archivo .env
dotenv.config();

// Creamos una aplicación de Express
const app = express();

// Aplicamos el middleware "cors" a la aplicación
app.use(cors());

// Aplicamos el middleware "express.json" a la aplicación con un límite de tamaño de 50 MB
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// Definimos una ruta "GET" en la raíz de la aplicación
app.get("/", async (req, res) => {
    // Enviamos una respuesta con el mensaje "Hello from DALL-E!"
    res.send("Hello from DALL-E!")
});

// Definimos una función para iniciar el servidor
const startServer = async () => {
    // Definimos la variable "port" en 8080
    let port = 8080

    try {
    // Llamamos a la función "connectDB" y le pasamos la URL de la base de datos desde nuestro archivo ".env"
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log(`Server is running on port: http://localhost:${port}`))

    } catch (error) {
        console.log("🚀 ~ file: index.js:35 ~ startServer ~ error", error)
        
    }
    // Hacemos que la aplicación "escuche" en el puerto especificado y mostramos un mensaje en consola al iniciar el servidor
}

// Llamamos a la función "startServer" para iniciar el servidor
startServer();
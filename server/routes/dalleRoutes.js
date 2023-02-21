import express from "express"
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

/**
 * !Este es el archivo, que conecta con la API de OpenIA
 */

// To make sure, that variables, are indeed populated correctly
dotenv.config()


// Crear un enrutador de Express
const router = express.Router();

// Configuración de la API de OpenAI

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

// Instanciar la API de OpenAI

const openai = new OpenAIApi(configuration);

/**
 * La ruta, que hace la llamada real a la API de OpenAI, que basado en el texto del usuario, devolverá una imagen real generada por sus inteligencias.
 *  */

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
  });
  

router.route("/").post(async (req, res) => {
    try {
        // Esto viene desde el front
        const { prompt } = req.body

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json"
        })

        // Teniendo la respuesta de la IA, tenemos que extraer la imagen, de la respuesta.
        const image = aiResponse.data.data[0].b64_json;

        // Con la imagen extraída, devolvemos un estado con la imagen.
        res.status(200).json({
            photo: image
        })
    } catch (error) {
        console.log(error, " <- Error");
        res.status(500).send(error?.response.data.error.message)
    }
})

export default router;
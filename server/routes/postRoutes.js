import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import sharp from 'sharp';
import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
});

router.route('/').post(async (req, res) => {
    try {


        const { name, prompt, photo } = req.body;
        // ! La idea de esto, seria subirlo a cloudinary, para obtener un enlace 
        // ! YO LO HARÉ SIN CLOUDINARY, PORQUE ME DA ALGUN ERROR A LA HORA DE PEDIR QUE SE SUBA
        // ! Aquí un ejemplo https://cloudinary.com/console/c-43f0112cc92c2b3926717356ec89e7/getting-started

        /* Creating a new post in the database. */
        const newPost = await Post.create({
            name,
            prompt,
            photo: photo,
        });

        res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        console.log(err);
        // console.log(err.toString());
        res.status(500).json({ success: false, message: "Some problem ocurred" });
    }
});

export default router;
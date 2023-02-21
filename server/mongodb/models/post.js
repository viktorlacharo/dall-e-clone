// Importa Mongoose
import mongoose from "mongoose";

// Crea un nuevo esquema llamado "Post"
const Post = new mongoose.Schema({
    // Especifica que el campo "name" es de tipo "String" y es requerido
    name: {type: "String", required: true},
    // Especifica que el campo "prompt" es de tipo "String" y es requerido
    prompt: {type: "String", required: true},
    // Especifica que el campo "photo" es de tipo "String" y es requerido
    photo: {type: "String", required: true},
});



// Crea un modelo Mongoose a partir del esquema "Post"
const PostSchema = mongoose.model("Post", Post);

// Exporta el modelo "PostSchema"
export default PostSchema;
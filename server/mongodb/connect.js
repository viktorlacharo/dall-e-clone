import mongoose from "mongoose";

// // Definimos la función "connectDB"
// const connectDB = (url) => {
//     // Establecemos una opción de Mongoose para hacer que las consultas sean estrictas
//     mongoose.set("strictQuery", true);
//     // Intentamos conectarnos a la base de datos en la URL especificada
//     mongoose.connect(url)
//     // Si la conexión es exitosa, mostramos un mensaje en consola
//     .then(() => console.log("MongoDB connected... "))
//     // Si hay un error, mostramos un mensaje de error en consola
//     .catch((err) => console.log(`Some error: ${err}`))
// }

// export default connectDB

// Definimos la función "connectDB"
const connectDB = (url) => {
    // Establecemos una opción de Mongoose para hacer que las consultas sean estrictas
    mongoose.set("strictQuery", true);
    // Intentamos conectarnos a la base de datos en la URL especificada
    mongoose.connect(url);
  
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
      console.log("MongoDB connected...");
  
      // Obtenemos la colección "Post"
      const Post = db.collection("posts");
  
      // Contamos los documentos de la colección
      Post.countDocuments({}, (err, count) => {
        if (err) {
          console.log(`Some error: ${err}`);
          return;
        }
  
        console.log(`La colección tiene ${count} documentos`);
  
        // Si hay más de 10 documentos, borramos todos
        if (count > 10) {
          Post.deleteMany({}, (err, result) => {
            if (err) {
              console.log(`Some error: ${err}`);
              return;
            }
  
            console.log(`Se han eliminado ${result.deletedCount} documentos de la colección`);
          });
        }
      });
    });
  };
  
  export default connectDB;
  
  
  
  
  
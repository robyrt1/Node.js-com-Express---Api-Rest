import express from "express";
import db from './config/conectdb.js'
import routes from './routes/index.js'


db.on("error", console.log.bind(console,'Error de conexão'));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});


const app = express();
app.use(express.json());
routes(app);

export default app;

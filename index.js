import express from "express"
import serieRouter from "./routers/seriesRouter.js"
import routeNotFound from "./MiddleWare/routeNotFound.js";
import errorHandler from "./MiddleWare/errorHandler.js";

// console.log("il terminale è collegato")
// console.log(serieComiche)

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('questa è la pagina iniziale')
})

app.use('/TVseries', serieRouter) // registrare il router

// middlware route not found

app.use(routeNotFound);

// middlware errore

app.use(errorHandler);

app.listen(port, () => {
    console.log(`La porta ${port} è aperta`)
})
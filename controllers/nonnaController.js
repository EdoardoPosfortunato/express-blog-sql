import serieComiche from "../tvSeries.js"
import connection from "../db.js";


// INDEX
const index = (req, res) => {

    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results) => {
        if (err) {
            console.log("errore")
        } else {
            res.json({
                data: results,
                count: results.length,
            })
        }
    });
}

// SHOW
const show = (req, res) => {
    const serieID = parseInt(req.params.id);
    const serie = serieComiche.find((curSerie) => curSerie.id == serieID);
    res.json({
        data: serie
    });
}

//STORE
const store = (req, res) => {

    console.log(req.body);

    const nextID = String(parseInt(serieComiche[serieComiche.length - 1].id) + 1);

    const newSerie = {
        id: nextID,
        titolo: req.body.titolo,
        anno: req.body.anno,
        genere: req.body.genere,
        regista: req.body.regista,
        trama: req.body.trama,
        img: req.body.img
    };

    serieComiche.push(newSerie);

    console.log(serieComiche);

    res.status(201);
    res.json(serieComiche)

}

//UPDATE
const update = (req, res) => {
    const serieID = req.params.id;

    const serieModificata = serieComiche.find(curSerie => curSerie.id == serieID)

    // console.log(serieModificata)

    if (!serieModificata) {
        res.status(404);

        res.json({
            error: 'Not Found',
            message: 'Serie Non Trovata'
        });

    }

    serieModificata.titolo = req.body.titolo;
    serieModificata.anno = req.body.anno;
    serieModificata.genere = req.body.genere;
    serieModificata.regista = req.body.regista;
    serieModificata.trama = req.body.trama;
    serieModificata.img = req.body.img;

    // res.json(serieModificata)
    // console.log(serieComiche)
    res.status(202)

    res.json({
        'serie modificata': serieModificata,
        'nuove serie': serieComiche
    })

}

//DESTROY 
const destroy = (req, res) => {

    const id = req.params.id

    const sql = 'DELETE FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {

        if (err) return res.status(500).json({ error: 'Not Found Item to Delate' });
        res.sendStatus(204)


    })

    // console.log(serieComiche)


}


const nonnaController = {
    index,
    show,
    store,
    update,
    destroy
}

export default nonnaController
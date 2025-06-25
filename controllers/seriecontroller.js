import serieComiche from "../tvSeries.js"


// INDEX
const index = (req, res) => {

    const genereFilter = req.query.genere;

    let result = serieComiche;

    if (genereFilter !== undefined) {

        result = serieComiche.filter((curSerie) =>
            curSerie.genere.includes(genereFilter)
        );

    }

    res.json({
        data: result,
        count: result.length,
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

    const serieID = req.params.id;

    console.log(serieID)

    const index = serieComiche.findIndex((curSerie) => curSerie.id === serieID)

    // console.log(serieComiche)

    if (index === -1) {
        res.status(404);
        return res.json({
            error: "Serie non trovata",
        });
    }


    const eliminata = serieComiche.splice(index, 1);

    console.log(serieComiche)

    res.status(200).json({
        commento: "La serie eliminata è",
        data: eliminata
    })

}


const serieController = {
    index,
    show,
    store,
    update,
    destroy
}

export default serieController
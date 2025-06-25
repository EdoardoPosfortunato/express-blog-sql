function errorHandler (err, req, res, next) {
    console.log("errore", err);
    res.status(500);
    res.json({
        error:"errore del Server"
    });
}

export default errorHandler
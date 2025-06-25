function routeNotFound (req, res, next) {
    res.status(404);
    res.json ({
        error: 'not Found',
    });
}

export default routeNotFound
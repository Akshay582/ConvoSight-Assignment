const movieRoute = (app, fs) => {
    const movies = './movies/3532674.json';

    app.get('/movies', (req, res) => {
        fs.readdirAsync(movies, 'utf8', (err, data) => {
            if(err) {
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = movieRoute;
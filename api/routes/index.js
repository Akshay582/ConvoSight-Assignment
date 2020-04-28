const movieRoute = require('./movies');

const router = (app, fs) => {

    app.get('/', (req, res) => {
        res.send("<h2 style='color: blue;'> MOVIE-METADATA-SEARCH</h2>");
    })

    movieRoute(app,fs);

};

module.exports = router;
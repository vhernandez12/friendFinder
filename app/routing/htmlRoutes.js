var path = requrie("path");

module.exports = function(app) {

    app.get("/survery", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
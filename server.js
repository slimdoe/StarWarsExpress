var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send('slim page!!!');
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
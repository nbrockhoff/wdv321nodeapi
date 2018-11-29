var express = require("express");
var app = express();


app.get("/", (req, res, next) => {
    res.json(["Lion", "Tiger", "Bear", "Dorothy", "Oz"]);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static(__dirname + "/client/public"));
}

// Connect to the Mongo DB
const db = process.env.MONGODB_URI ||  "mongodb://localhost/nytreact"
mongoose.connect(db, function(error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log("You are connected");
    }
});

//'Access-Control-Allow-Origin' Allows access to the requested resource
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
  });


// Add routes

var articlesController = require("./server/controllers/articleController");
var router = new express.Router();

router.get("/api/searched", articlesController.find);

router.post("/api/searched", articlesController.insert);

router.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(router);



// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
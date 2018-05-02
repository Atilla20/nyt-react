var Article = require("../models/Article");

module.exports = {
    //finds articles in db
    find: function(req, res) {
        Article.find().then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    },

    //adds new searched articles
    insert: function(req, res) {
        Article.create(req.body).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    }
};
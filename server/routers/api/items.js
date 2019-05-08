const express = require("express");
const Router = express.Router();
let Item = require("../../models/items");

Router.get("/", function(req, res, next) {
  Item.find({}).then(function(err, items) {
    if (err) {
      res.json(err);
    } else {
      res.json(items);
    }
  });
});
Router.post("/", function(req, res, next) {
  Item.create(req.body)
    .then(function(result) {
      res.send(result);
    })
    .catch(() => res.status(400).send("Unable to save to database"));
});
Router.put("/:id", function(req, res, next) {
  Item.findById(req.params.id, function(err, item) {
    if (!item) res.status(404).send("Data is not found");
    else {
      Item.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(result => {
          res.json(result);
        })
        .catch(() => res.status(400).send("Unable to update database"));
    }
  });
});
Router.delete("/:id", function(req, res, next) {
  Item.findOneAndDelete({ _id: req.params.id }, function(err) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = Router;

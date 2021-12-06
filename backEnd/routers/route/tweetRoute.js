const express = require("express");
const tweetRoute = express.Router();

const { addTweet, tweets, favorite ,allFavorite} = require("../controller/tweet");
const {authentication} = require("../middlewares/authentication")

tweetRoute.post("/add-tweet", authentication, addTweet);
tweetRoute.get("/tweets",tweets );
tweetRoute.post("/favorite", authentication, favorite);
tweetRoute.get("/allFavorite", authentication, allFavorite);

module.exports = tweetRoute;

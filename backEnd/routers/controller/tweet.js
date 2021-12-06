const tweetModel = require("../../db/models/tweetModel");
const userModel = require("../../db/models/userModel");

const tweets = async (req, res) => {
  const tweet = await tweetModel.find({}).populate("userId");
  res.status(200).json(tweet);
};

const addTweet = async (req, res) => {
  const { text, img } = req.body;
  const userId = req.token.userId;
  try {
    const newTweet = new tweetModel({ text, img, userId });
    const response = await newTweet.save();
    const tweets = await tweetModel.find({}).populate("userId");
    res.status(201).json(tweets);
  } catch (error) {
    res.send(error);
  }
};

const favorite = async (req, res) => {
  const { tweetId } = req.body;
  const userId = req.token.userId;
  try {
      const tweetCheck = await userModel.find({ _id: userId }).populate("favorite")
      const check = tweetCheck[0].favorite.filter((elem)=>{
        return elem._id == tweetId
      })
      
      if(check.length){
        const filterTweets = await userModel.findOneAndUpdate({_id:userId},  {
            $pull:{favorite:tweetId}
        }, {new:true} ).populate("favorite");
        res.status(201).json(filterTweets);
    } else{
          const filterTweets = await userModel.findOneAndUpdate({ _id: userId }, {
              $push:{favorite:tweetId}
          }, {new:true}).populate("favorite");
          res.status(201).json(filterTweets);
      }
  } catch (error) {
    res.send(error);
  }
};

const allFavorite =async(req,res)=>{
  const userId =req.token.userId;
  const user= await userModel.find({_id:userId}).populate("favorite")

  const favList = user[0].favorite;
  res.status(200).json(favList);

}

module.exports = { addTweet, tweets, favorite,allFavorite };

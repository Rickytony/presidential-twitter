const Twitter = require("twitter-lite");

const config = {
  consumer_key: "X9T8CrV7GmZlEML0YkNQvC5z5",
  consumer_secret: "E4z7fh3JFvKklathFQAJTiuUY8m2pDJVs0FHCjsWBAxOtDqc84",
  access_token_key: "29064688-qjbdsFjJCrIWnk6CnkwtwBQBkQOcBPj5RDN8QPV0v",
  access_token_secret: "pVd92M2bNKYE8FcPPyeETlU1uZsgLpbtpKKtCDSBm8iHH"
};

const client = new Twitter(config);

function searchTweets(query) {
  return client.get("search/tweets", params).then(results => {
    console.log("results", results);
  });
}

exports.searchTweets = searchTweets;

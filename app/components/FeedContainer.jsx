import React from "react";
import { fetch } from "whatwg-fetch";
import { Tweet } from "./Tweet.jsx";
import { FeedToggle } from "./FeedToggle.jsx";

class FeedContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      tweets: [],
      currentQuery: "realDonaldTrump",
      nextQuery: "HillaryClinton"
    };
    this.fetchTweets = this.fetchTweets.bind(this);
    this.toggleFeed = this.toggleFeed.bind(this);
  }

  componentDidMount() {
    this.fetchTweets();
  }

  fetchTweets() {
    fetch(`twitter/${this.state.currentQuery}`)
      .then(response => {
        return response.json();
      })
      .then(tweets => {
        return this.setState({ tweets });
      });
  }

  toggleFeed() {
    this.setState(
      {
        currentQuery: this.state.nextQuery,
        nextQuery: this.state.currentQuery
      },
      () => this.fetchTweets()
    );
  }

  render() {
    if (this.state.tweets.length < 1) {
      return (
        <div className="container mt-4">
          <h2 className="col">Tweets are loading...</h2>
        </div>
      );
    }
    return (
      <div className="container mt-4">
        <FeedToggle
          handleClick={this.toggleFeed}
          nextQuery={this.state.nextQuery}
        />
        {this.state.tweets.map(tweet => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
      </div>
    );
  }
}

export { FeedContainer };

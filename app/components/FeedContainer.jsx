import React from "react";
import { fetch } from "whatwg-fetch";

class FeedContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      tweets: [],
      currentQuery: "@realDonaldTrump"
    };
  }

  componentDidMount() {
    fetch(`twitter/${this.state.currentQuery}`)
      .then(response => {
        return response.json();
      })
      .then(tweets => {
        return this.setState({ tweets });
      });
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
        <h1>Cheesy Chicken</h1>
      </div>
    );
  }
}

export { FeedContainer };
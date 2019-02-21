import React from "react";
import { connect } from "react-redux";
import { Tweet } from "./Tweet.jsx";
import { FeedToggle } from "./FeedToggle.jsx";
import { getTweets } from "../actions";

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTweets(this.props.currentQuery, true);
  }

  render() {
    return (
      <div className="container mt-4">
        <FeedToggle />
        {this.props.tweets &&
          this.props.tweets.map(tweet => (
            <Tweet tweet={tweet} key={tweet.id} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tweets: state.tweetReducer.tweets,
  currentQuery: state.queries.currentQuery
});

const mapDispatchToProps = {
  getTweets: getTweets
};

const ConnectedFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);

export { ConnectedFeedContainer as FeedContainer };

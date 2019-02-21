import React from "react";
import { connect } from "react-redux";
import { getTweets } from "../actions";

const FeedToggle = props => {
  return (
    <button onClick={() => props.getTweets(props.nextQuery)}>
      Show me tweets about @{props.nextQuery}
    </button>
  );
};

const mapStateToProps = state => ({
  nextQuery: state.queries.nextQuery
});

const mapDispatchToProps = {
  getTweets: getTweets
};

const ConnectedFeedToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedToggle);

export { ConnectedFeedToggle as FeedToggle };

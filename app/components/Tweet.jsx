import React from "react";
import PropTypes from "prop-types";

const Tweet = props => {
  return (
    <div className="col my-3">
      <div className="row">
        <div className="font-weight-bold">{props.tweet.name}</div>
        <div className="font-weight-lighter mx-2">{`@${props.tweet.user}`}</div>
        <div className="font-weight-lighter">{props.tweet.timestamp}</div>
      </div>
      <div className="row">
        <div>{props.tweet.text}</div>
      </div>
    </div>
  );
};

Tweet.proptypes = {
  tweet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  })
};

export { Tweet };

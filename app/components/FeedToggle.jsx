import React from "react";
import PropTypes from "prop-types";

const FeedToggle = props => {
  return (
    <button onClick={() => props.handleClick()}>
      Show me @{props.nextQuery}
    </button>
  );
};

FeedToggle.proptypes = {
  handleClick: PropTypes.func.isRequired,
  nextQuery: PropTypes.string.isRequired
};

export { FeedToggle };

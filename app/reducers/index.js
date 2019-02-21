import { combineReducers } from "redux";

const tweetReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_TWEETS":
      return { ...state };
    case "TWEETS_RECEIVED":
      return { ...state, tweets: action.json };
    default:
      return state;
  }
};

const queryReducer = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_QUERY":
      return {
        ...state,
        currentQuery: state.nextQuery,
        nextQuery: state.currentQuery
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tweetReducer,
  queries: queryReducer
});

export default rootReducer;

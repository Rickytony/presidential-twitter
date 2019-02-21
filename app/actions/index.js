export const getTweets = (query, isInitialFetch) => ({
  type: "GET_TWEETS",
  query,
  isInitialFetch
});

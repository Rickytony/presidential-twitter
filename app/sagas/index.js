import { put, takeLatest, all } from "redux-saga/effects";

function* fetchTweets(action) {
  const json = yield fetch(`twitter/${action.query}`).then(response =>
    response.json()
  );
  const toggleQuery = !action.isInitialFetch;
  yield put({ type: "TWEETS_RECEIVED", json: json });
  if (toggleQuery) {
    yield put({ type: "TOGGLE_QUERY" });
  }
}

function* actionWatcher() {
  yield takeLatest("GET_TWEETS", fetchTweets);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

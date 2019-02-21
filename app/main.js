import React from "react";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import { FeedContainer } from "./components/FeedContainer.jsx";
import rootSaga from "./sagas";
import "bootstrap/dist/css/bootstrap.min.css";

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  queries: {
    currentQuery: "realDonaldTrump",
    nextQuery: "HillaryClinton"
  }
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <FeedContainer />
  </Provider>,
  document.getElementById("main")
);

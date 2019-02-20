import React from "react";
import ReactDOM from "react-dom";
import { FeedContainer } from "./components/FeedContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return <FeedContainer />;
};

ReactDOM.render(<Main />, document.getElementById("main"));

import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter as Router } from "react-router-dom";

//component
import TodoContainer from "./components/TodoContainer";

//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>  
  </React.StrictMode>
);
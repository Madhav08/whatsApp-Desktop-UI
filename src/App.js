import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" exact>
            <Sidebar />
            <Chat />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./components/Search";
import User from "./components/User";
import Repos from "./components/Repos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Search} />
        <Route
          path="/:user"
          render={() => (
            <>
              <User />
              <Repos />
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import supabase from "./supabaseClient";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./register";
import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import React, { useState, useEffect } from "react";
function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Navbar token={token} />
                <Home />
              </React.Fragment>
            }
          />
          <Route
            path="/register"
            element={
              <React.Fragment>
                <Register />
              </React.Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Login setToken={setToken} />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

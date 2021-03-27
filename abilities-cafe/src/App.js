import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from "./components/Admin";
import Login from "./components/Login";
import Menu from "./components/Menu";
import NavBar from "./components/Recurring/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact render={(props) => <Menu />} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

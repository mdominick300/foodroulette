import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./pages/Start";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Start} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

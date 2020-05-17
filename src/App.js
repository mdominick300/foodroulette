import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./pages/Start";
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
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

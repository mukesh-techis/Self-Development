import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component= { ProductListing } />
          <Route path="/product/:productId" exact component= { ProductDetail } />
          <Route>404 not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
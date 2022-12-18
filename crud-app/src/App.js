import React from "react";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import Products from "./components/Card/Cards";
import CardDetails from './components/Card/CardDetails'

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/add" element={<AddCard/>} exact />
          <Route path="/cards" element={<Products/>} exact />
          <Route path="/cards/:id" element={<CardDetails/>} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;

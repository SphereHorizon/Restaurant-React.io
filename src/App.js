import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/Scss/index.scss";
import Hom from "./assets/pages/Hom";
import Meals from "./assets/pages/Meals";
import Reservation from "./assets/pages/Reservation";
import Blog from "./assets/pages/Blog";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hom />}></Route>
          <Route path="/meals" element={<Meals />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

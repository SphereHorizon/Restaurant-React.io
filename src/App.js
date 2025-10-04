import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/Scss/index.scss";
import Hom from "./assets/pages/Hom";
import Meals from "./assets/pages/Meals";
import Reservation from "./assets/pages/Reservation";
import Blog from "./assets/pages/Blog";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import { AnimatePresence, motion } from "framer-motion";
const App = () => {
  return (
    <div>
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
};

export default App;

//  <Route
//               path="/"
//               element={
//                 <motion.div
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 50 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Hom />
//                 </motion.div>
//               }
//             ></Route>

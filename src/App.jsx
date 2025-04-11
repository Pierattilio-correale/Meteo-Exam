import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./Components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeForm from "./Components/HomeForm";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import MeteoDetails from "./Components/MeteoDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fake-body h-100 min-vh-100 d-flex flex-column">
          <MyNavbar />

          <div className=" flex-grow-1">
            <Routes>
              <Route element={<HomeForm />} path="/" />

              <Route element={<MeteoDetails />} path="/Meteodetails/:meteoId" />
            </Routes>
          </div>
          <Home />
          <div className="bg-warning mt-3">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

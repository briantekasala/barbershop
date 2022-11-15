import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Price from "./component/navigation/price/PricePage";
import Gallery from "./component/navigation/gallery/GalleryPage";
import Contact from "./component/navigation/contact/ContactPage";
import Reservation from "./component/navigation/reservation/ReservationPage";
import Login from "./component/navigation/login/LoginPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const MyContext = React.createContext(true);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

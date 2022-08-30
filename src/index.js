import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Components/Search/Search";
import LandingPage from "./Components/LandingPage/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="reviews" element={<Search />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import AdminPanel from "./pages/AdminPanel";
import HomePage from "./pages/HomePage";
import MyNavBar from "./components/MyNavBar";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

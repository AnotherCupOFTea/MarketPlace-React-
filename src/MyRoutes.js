import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProvider from "./context/AdminProvider";
import AddPage from "./pages/AddPage";
import AdminPanel from "./pages/AdminPanel";
import HomePage from "./pages/HomePage";

const MyRoutes = () => {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
};

export default MyRoutes;

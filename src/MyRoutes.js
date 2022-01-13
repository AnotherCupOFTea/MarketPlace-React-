import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProvider from "./context/AdminProvider";
import AuthProvider from "./context/AuthProvider";
import AddPage from "./pages/AddPage";
import AdminPanel from "./pages/AdminPanel";
import HomePage from "./pages/HomePage";
import MyNavBar from "./components/MyNavBar";
import ProductMenu from "./components/ProductMenu";
import CartPage from "./pages/CartPage";

const MyRoutes = () => {
  return (
      <AuthProvider>
      <AdminProvider>
        <BrowserRouter>
          <MyNavBar />
          <ProductMenu/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </AuthProvider>
  );
};

export default MyRoutes;

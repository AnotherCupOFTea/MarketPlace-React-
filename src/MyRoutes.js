import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProvider from "./context/AdminProvider";
import AuthProvider from "./context/AuthProvider";
import AddPage from "./pages/AddPage";
import AdminPanel from "./pages/AdminPanel";
import HomePage from "./pages/HomePage";
import MyNavBar from "./components/MyNavBar";
import CartPage from "./pages/CartPage";
import ClientProvider, { ClientContext } from "./context/ClientProvider";
import LikePage from "./pages/LikePage";
import Footer from "./components/Footer";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <AdminProvider>
        <ClientProvider>
          <BrowserRouter>
            <MyNavBar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/like" element={<LikePage />} />

            </Routes>
            <Footer/>
          </BrowserRouter>
        </ClientProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default MyRoutes;

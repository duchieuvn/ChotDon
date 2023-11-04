import "./components/App.css";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import OrderForm from "./pages/OrderForm";
import OrderPage from "./pages/OrderPage";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="order/form" element={<OrderForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

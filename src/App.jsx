import "./components/App.css";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [orderList, setOrderList] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

    // <div className={styles.container}>
    //     <h1>CHỐT ĐƠN</h1>
    //     <OrderList orderList={orderList}></OrderList>
    //     <Order orderList={orderList} onSetOrderList={setOrderList}></Order>
    //     <h2>BẢNG THỐNG KÊ</h2>
    //     <StatsTable orderList={orderList} />
    //   </div>
  );
}

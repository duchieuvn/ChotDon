import { useState } from "react";
import NavBar from "../components/NavBar";
import StatsTable from "../components/StatsTable";

function HomePage() {
  const [orderList, setOrderList] = useState([]);

  return (
    <div>
      <NavBar />
      <h1>HOMEPAGE</h1>
      <div>
        <h2>BẢNG THỐNG KÊ</h2>
        <StatsTable orderList={orderList} />
      </div>
    </div>
  );
}

export default HomePage;

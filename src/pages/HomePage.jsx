import { useState } from "react";
import NavBar from "../components/NavBar";
import StatsTable from "../components/StatsTable";

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>TỔNG QUAN</h1>
      <div>
        <h2>BẢNG THỐNG KÊ</h2>
        <StatsTable orderList={[]} />
      </div>
    </div>
  );
}

export default HomePage;

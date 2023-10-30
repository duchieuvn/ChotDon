import "./App.css";
import { useState } from "react";
import OrderTable from "./OrderTable";
import OrderInput from "./OrderInput";
import StatsTable from "./StatsTable";
import styles from "./Container.module.css";

export const priceTable = {
  BAY: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  BB702: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  MATCHA: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  HAPPYLIFE: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  SALTED: { inPrice: 117, boxPrice: 135, packPrice: 16 },
};

export default function App() {
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(
    Object.keys(priceTable)
  );

  const [orderList, setOrderList] = useState([]);
  return (
    <div className={styles.container}>
      <h1>CHỐT ĐƠN</h1>
      <OrderTable
        products={products}
        onSetProducts={setProducts}
        availableProducts={availableProducts}
        onSetAvailableProducts={setAvailableProducts}
      >
        <OrderInput
          products={products}
          onSetProducts={setProducts}
          availableProducts={availableProducts}
          onSetAvailableProducts={setAvailableProducts}
        ></OrderInput>
        <button
          onClick={() => {
            setOrderList([...orderList, products]);
          }}
        >
          CHỐT ĐƠN
        </button>
      </OrderTable>

      <h2>BẢNG THỐNG KÊ</h2>
      <StatsTable orderList={orderList} />
    </div>
  );
}

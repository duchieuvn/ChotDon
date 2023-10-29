import "./App.css";
import { useState } from "react";
import OrderTable from "./OrderTable";
import OrderInput from "./OrderInput";
import StatsTable from "./StatsTable";

export const priceTable = {
  BAY: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  BB702: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  MATCHA: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  HAPPYLIFE: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  SALTED: { inPrice: 117, boxPrice: 135, packPrice: 16 },
};

const orderInfo = {
  customer: "Duy Nguyen",
  destination: "KTX khu B",
  time: "20:00:00",

  products: [
    { productName: "BAY", boxQuantity: 1, packQuantity: 0, giveAway: 0 },
    { productName: "BB702", boxQuantity: 0, packQuantity: 2, giveAway: 0 },
    { productName: "MATCHA", boxQuantity: 0, packQuantity: 0, giveAway: 3 },
  ],
};
const orderList = [
  [
    { productName: "BAY", boxQuantity: 1, packQuantity: 0, giveAway: 0 },
    { productName: "BB702", boxQuantity: 0, packQuantity: 2, giveAway: 0 },
    { productName: "MATCHA", boxQuantity: 0, packQuantity: 0, giveAway: 3 },
  ],
  [
    { productName: "BAY", boxQuantity: 0, packQuantity: 2, giveAway: 0 },
    { productName: "BB702", boxQuantity: 1, packQuantity: 0, giveAway: 0 },
    { productName: "MATCHA", boxQuantity: 0, packQuantity: 2, giveAway: 0 },
  ],
  [
    { productName: "BB702", boxQuantity: 1, packQuantity: 0, giveAway: 0 },
    { productName: "SALTED", boxQuantity: 0, packQuantity: 1, giveAway: 1 },
  ],
  [
    { productName: "MATCHA", boxQuantity: 2, packQuantity: 0, giveAway: 0 },
    { productName: "HAPPYLIFE", boxQuantity: 0, packQuantity: 0, giveAway: 2 },
  ],
];

export default function App() {
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(
    Object.keys(priceTable)
  );
  return (
    <div>
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
      </OrderTable>
      <button>Confirm</button>
      <StatsTable></StatsTable>
    </div>
  );
}

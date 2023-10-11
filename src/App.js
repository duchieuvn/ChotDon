import "./App.css";
import { useState } from "react";

const priceTable = {
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

class Order {
  constructor(
    customer,
    customerPhone,
    time,
    destination = "KTX khu B",
    products = []
  ) {
    this.customer = customer;
    this.customerPhone = customerPhone;
    this.destination = destination;
    this.time = time;
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }
}

export default function App() {
  const [products, setProducts] = useState(orderList[0]);
  function handleAddProduct(p) {
    setProducts([...products, p]);
  }

  return (
    <div>
      <h1>CHỐT ĐƠN</h1>
      <OrderTable products={products} />
      <Form onAddProduct={handleAddProduct}></Form>
      <button>Confirm</button>
    </div>
  );
}

function OrderTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Loại</th>
          <th>Đơn hộp</th>
          <th>Đơn lẻ</th>
          <th>Khuyến mãi</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => {
          return (
            <tr key={item.productName}>
              <td>{item.productName}</td>
              <td>{item.boxQuantity}</td>
              <td>{item.packQuantity}</td>
              <td>{item.giveAway}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Form({ products, onAddProduct }) {
  const [productName, setProductName] = useState("BAY");
  const [boxQuantity, setBoxQuantity] = useState(1);
  const [packQuantity, setPackQuantity] = useState(0);
  const [giveAway, setGiveAway] = useState(0);
  return (
    <>
      <select onChange={(e) => setProductName(e.target.value)}>
        <option value="BAY">BAY</option>
        <option value="BB702">BB702</option>
        <option value="MATCHA">MATCHA</option>
        <option value="HAPPYLIFE">HAPPYLIFE</option>
        <option value="SALTED">SALTED</option>
      </select>
      <input
        type="number"
        className="add-product"
        name="boxQuantity"
        value={boxQuantity}
        onChange={(e) => {
          setBoxQuantity(e.target.value);
        }}
      ></input>
      <input
        type="number"
        className="add-product"
        name="packQuantity"
        value={packQuantity}
        onChange={(e) => {
          setPackQuantity(e.target.value);
        }}
      ></input>
      <input
        type="number"
        className="add-product"
        name="giveAway"
        value={giveAway}
        onChange={(e) => {
          setGiveAway(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          const product = { productName, boxQuantity, packQuantity, giveAway };
          onAddProduct(product);
        }}
      >
        Add
      </button>
    </>
  );
}

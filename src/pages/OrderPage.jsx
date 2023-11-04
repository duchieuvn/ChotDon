import NavBar from "../components/NavBar";
import OrderList from "../components/OrderList";

const orderList = [
  {
    products: [
      { productName: "BAY", boxQuantity: 1, giveAway: 0 },
      { productName: "BB702", boxQuantity: 0, giveAway: 0 },
      { productName: "MATCHA", boxQuantity: 0, giveAway: 3 },
    ],
  },
  {
    products: [
      { productName: "BAY", boxQuantity: 1, giveAway: 0 },
      { productName: "BB702", boxQuantity: 0, giveAway: 0 },
      { productName: "MATCHA", boxQuantity: 0, giveAway: 3 },
    ],
  },
  {
    products: [
      { productName: "BAY", boxQuantity: 1, giveAway: 0 },
      { productName: "BB702", boxQuantity: 0, giveAway: 0 },
      { productName: "MATCHA", boxQuantity: 0, giveAway: 3 },
    ],
  },
  {
    products: [
      { productName: "BAY", boxQuantity: 1, giveAway: 0 },
      { productName: "BB702", boxQuantity: 0, giveAway: 0 },
      { productName: "MATCHA", boxQuantity: 0, giveAway: 3 },
    ],
  },
];
function OrderPage() {
  return (
    <div>
      <NavBar />
      <h1>OrderPage</h1>
      <OrderList orderList={orderList}></OrderList>
    </div>
  );
}

export default OrderPage;

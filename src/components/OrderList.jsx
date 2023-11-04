import OrderCard from "./OrderCard";

function OrderList({ orderList }) {
  return (
    <div>
      {orderList.map((order) => {
        return <OrderCard order={order.products}></OrderCard>;
      })}
    </div>
  );
}

export default OrderList;

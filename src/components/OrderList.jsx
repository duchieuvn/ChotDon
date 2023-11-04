import OrderCard from "./OrderCard";

function OrderList({ orderList }) {
  return (
    <div>
      {orderList.map((order) => {
        console.log(order);
        return <OrderCard order={order}></OrderCard>;
      })}
    </div>
  );
}

export default OrderList;

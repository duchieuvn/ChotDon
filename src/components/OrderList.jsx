import OrderCard from "./OrderCard";

function OrderList({ orderList }) {
  console.log(orderList);
  return (
    <>
      {orderList.map((order) => {
        return <OrderCard order={order} key={order.id}></OrderCard>;
      })}
    </>
  );
}

export default OrderList;

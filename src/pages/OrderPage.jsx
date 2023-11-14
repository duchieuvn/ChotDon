import NavBar from "../components/NavBar";
import OrderList from "../components/OrderList";
import { getOrders } from "../services/apiOrders";
import { useQuery } from "@tanstack/react-query";

function OrderPage() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["order"],
    queryFn: getOrders,
  });

  if (isLoading) {
    console.log("loading orders");
  } else {
    console.log(orders);
    return (
      <div>
        <NavBar />
        <h1>ĐƠN HÀNG</h1>
        <OrderList orderList={orders}></OrderList>
      </div>
    );
  }

  return <></>;
}

export default OrderPage;

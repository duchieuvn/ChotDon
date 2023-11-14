import NavBar from "../components/NavBar";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOneOrder } from "../services/apiOrders";
import OrderProductsInput from "../components/OrderProductsInput";

function OrderForm() {
  // const [products, setProducts] = useState([]);
  // const handleDelete = (productName) => {
  //   const remainProducts = products.filter((p) => p.productName != productName);
  //   setProducts(remainProducts);
  //   onSetAvailableProducts([...availableProducts, productName]);
  // };
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createOneOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "order" });
      alert("Order created");
    },
  });
  function onSubmit(data) {
    console.log("data");
    console.log(data);
    mutate(data);
  }

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <NavBar />
      <h1>TẠO ĐƠN HÀNG</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Thông tin người nhận</h3>
          <TextField
            id="customer_name"
            label="Tên người nhận"
            variant="standard"
            {...register("customer_name")}
          />
          <TextField
            id="phone_number"
            label="Số điện thoại"
            variant="standard"
            {...register("phone_number")}
          />
          <TextField
            id="location"
            label="Địa chỉ"
            variant="standard"
            {...register("location")}
          />
        </div>
        <OrderProductsInput />
        <Button type="submit" variant="contained">
          Chốt đơn
        </Button>
        ;
      </form>
    </div>
  );
}

export default OrderForm;

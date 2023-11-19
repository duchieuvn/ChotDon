import NavBar from "../components/NavBar";

import Button from "@mui/material/Button";
import { Container, Divider, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOneOrder } from "../services/apiOrders";
import OrderProductsInput from "../components/OrderProductsInput";
import OrderCustomerInput from "../components/OrderCustomerInput";

function OrderForm() {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createOneOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "order" });
      alert("Order created");
    },
  });
  const [addedProducts, setAddedProducts] = useState([]);

  function onSubmit(data) {
    console.log("------form data---------");
    console.log(data);
    // mutate(data);
  }

  console.log("Products in Cart:");
  console.log(addedProducts);
  console.log(JSON.stringify(addedProducts));

  const { register, handleSubmit } = useForm();
  return (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <Stack marginY={1}>
          <h2>Tạo đơn hàng</h2>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row" spacing={2}>
            <OrderCustomerInput register={register} />
            <Divider orientation="vertical" flexItem />
            <OrderProductsInput
              addedProducts={addedProducts}
              setAddedProducts={setAddedProducts}
            />
          </Stack>
          <input
            name="products"
            type="hidden"
            value={JSON.stringify(addedProducts)}
            {...register("products")}
          />
          <Button type="submit" variant="contained">
            Chốt đơn
          </Button>
        </form>
      </Container>
    </>
  );
}

export default OrderForm;

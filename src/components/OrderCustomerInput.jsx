import { Stack, TextField } from "@mui/material";
function OrderCustomerInput({ register }) {
  return (
    <Stack
      spacing={2}
      sx={{
        width: "50%",
      }}
    >
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
    </Stack>
  );
}

export default OrderCustomerInput;

import NavBar from "../components/NavBar";
import Button from "@mui/material/Button";
import { MenuItem, Select, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOneOrder } from "../services/apiOrders";
import { getProducts } from "../services/apiProducts";

export function OrderForm() {
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

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });

  if (!isLoading) {
    console.log("---product");
    console.log(products);
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
        {/* <div>
              <h3>Sản phẩm</h3>
              <input
                type="hidden"
                name="productCart"
                value={JSON.stringify(products)}
              ></input>
              {products.map((p) => {
                return <OrderProductCard product={p}></OrderProductCard>;
              })}
              <OrderAddProductCard
                products={products}
                setProducts={setProducts}
                inputMode={true}
              ></OrderAddProductCard>
              <label htmlFor="ship">Phí ship:</label>
              <input name="ship"></input>
            </div> */}
        <Select labelId="product_name" id="demo-simple-select" label="Age">
          {products.map((p) => {
            return <MenuItem value={p.name}>{p.name}</MenuItem>;
          })}
        </Select>
        <Button type="submit" variant="contained">
          Chốt đơn
        </Button>
        ;
      </form>
    </div>
  );
}

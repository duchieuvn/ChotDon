import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
import { MenuItem, Select } from "@mui/material";

function OrderProductsInput() {
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

  return (
    <Select id="product_name">
      {products?.map((p) => {
        return <MenuItem value={p.name}>{p.name}</MenuItem>;
      })}
    </Select>
  );
  <div>
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
  </div>;
}

export default OrderProductsInput;

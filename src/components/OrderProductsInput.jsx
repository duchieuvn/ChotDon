import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
import { InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function OrderProductsInput({ addedProducts, setAddedProducts }) {
  const {
    isLoading,
    data: avaibleProducts,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });
  const [currentProduct, setCurrentProduct] = useState({
    quantity: 1,
  });

  function handleSelectProduct(e) {
    const value = e.target.value;

    setCurrentProduct({
      ...currentProduct,
      id: value.id,
      name: value.name,
      retail_price: value.retail_price,
    });
  }

  function handleSelectQuantity(e) {
    setCurrentProduct({
      ...currentProduct,
      quantity: e.target.value,
    });
  }

  function handleRemoveProduct(productId) {
    const remainProducts = addedProducts.filter((p) => p.id != productId);
    setAddedProducts(remainProducts);
  }
  return (
    <Stack
      sx={{
        width: "50%",
      }}
      spacing={2}
    >
      <h3>Sản phẩm</h3>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="right">Số lượng</TableCell>
              <TableCell align="right">Giá bán</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addedProducts?.map((addedP) => {
              return (
                <TableRow key={addedP.id}>
                  <TableCell>{addedP.name}</TableCell>
                  <TableCell align="right">{addedP.quantity}</TableCell>
                  <TableCell align="right">{addedP.retail_price}</TableCell>
                  <TableCell>
                    <button
                      type="button"
                      onClick={() => {
                        handleRemoveProduct(addedP.id);
                      }}
                    >
                      x
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
            {/* -------------------------INPUT------------------------ */}

            <TableRow>
              <TableCell>
                <Select
                  value={currentProduct.name}
                  onChange={handleSelectProduct}
                  sx={{
                    width: "200px",
                  }}
                  variant="standard"
                >
                  {avaibleProducts?.map((p) => {
                    return (
                      <MenuItem key={p.name} value={p}>
                        {p.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </TableCell>
              <TableCell align="right">
                <input
                  type="number"
                  min={1}
                  value={currentProduct.quantity}
                  onChange={handleSelectQuantity}
                />
              </TableCell>
              <TableCell align="right">{currentProduct.retail_price}</TableCell>
              <TableCell>
                <button
                  type="button"
                  onClick={() => {
                    setAddedProducts([...addedProducts, currentProduct]);
                  }}
                >
                  +
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default OrderProductsInput;
